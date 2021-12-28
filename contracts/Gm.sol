// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

import {IBaseERC721Interface, ConfigSettings} from "gwei-slim-nft-contracts/contracts/base/ERC721Base.sol";
import {ERC721Delegated} from "gwei-slim-nft-contracts/contracts/base/ERC721Delegated.sol";

import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {AddressUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import {GmRenderer} from "./GmRenderer.sol";
import {Base64} from "base64-sol/base64.sol";

/**

ASCII ART HERE

 */
contract Gm is ERC721Delegated {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private currentTokenId;
    uint256 public immutable maxSupply;
    uint256 public salePrice;
    GmRenderer public renderer;
    mapping(uint256 => bytes32) private mintSeeds;

    constructor(
        address baseFactory,
        address _rendererAddress,
        uint256 _maxSupply
    )
        ERC721Delegated(
            baseFactory,
            "gm",
            "gm",
            ConfigSettings({
                royaltyBps: 1000,
                uriBase: "",
                uriExtension: "",
                hasTransferHook: false
            })
        )
    {
        renderer = GmRenderer(_rendererAddress);
        maxSupply = _maxSupply;
    }

    // price = 0 == sale not started
    function setSalePrice(uint256 newPrice) public onlyOwner {
        salePrice = newPrice;
    }

    function mintsLeft() external view returns (uint256) {
        return maxSupply - currentTokenId.current();
    }

    function mint(uint256 count) public payable {
        require(
            currentTokenId.current() + count <= maxSupply,
            "gm, mint is sold out"
        );
        require(salePrice != 0, "Sale not started");
        require(msg.value == salePrice * count, "Wrong sale price");

        for (uint256 i = 0; i < count; i++) {
            mintSeeds[currentTokenId.current()] = _generateSeed(
                currentTokenId.current()
            );
            _mint(msg.sender, currentTokenId.current());
            currentTokenId.increment();
        }
    }

    function burn(uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not allowed");
        _burn(tokenId);
    }

    /**
      @dev This withdraws ETH from the contract to the contract owner.
     */
    function withdraw() external onlyOwner {
        // No need for gas limit to trusted address.
        AddressUpgradeable.sendValue(payable(_owner()), address(this).balance);
    }

    function svgBase64Data(bytes memory data)
        internal
        pure
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(data)
                )
            );
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        string memory json;
        (bytes memory tokenData, bytes memory name) = renderer.svgRaw(
            tokenId,
            mintSeeds[tokenId]
        );
        json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"description": "gm-onchain is a collection of 10,000 randomly generated, onchain ascii-art renditions of our favorite crypto phrase. enjoy.",',
                        '"image": "',
                        svgBase64Data(tokenData),
                        '", "attributes": [',
                        '{"trait_type":"style","value":"',
                        name,
                        '"}]}'
                    )
                )
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function seed(uint256 tokenId) external view returns (bytes32) {
        return mintSeeds[tokenId];
    }

    function _generateSeed(uint256 tokenId) private view returns (bytes32) {
        return
            keccak256(abi.encodePacked(block.timestamp, msg.sender, tokenId));
    }
}
