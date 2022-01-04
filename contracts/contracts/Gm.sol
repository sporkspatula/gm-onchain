// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

import {IBaseERC721Interface, ConfigSettings} from "gwei-slim-nft-contracts/contracts/base/ERC721Base.sol";
import {ERC721Delegated} from "gwei-slim-nft-contracts/contracts/base/ERC721Delegated.sol";
import {StringsUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {AddressUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import {GmRenderer} from "./GmRenderer.sol";
import {Base64} from "base64-sol/base64.sol";

/**
                                                    
        GGGGGGGGGGGGGMMMMMMMM               MMMMMMMM
     GGG::::::::::::GM:::::::M             M:::::::M
   GG:::::::::::::::GM::::::::M           M::::::::M
  G:::::GGGGGGGG::::GM:::::::::M         M:::::::::M
 G:::::G       GGGGGGM::::::::::M       M::::::::::M
G:::::G              M:::::::::::M     M:::::::::::M
G:::::G              M:::::::M::::M   M::::M:::::::M
G:::::G    GGGGGGGGGGM::::::M M::::M M::::M M::::::M
G:::::G    G::::::::GM::::::M  M::::M::::M  M::::::M
G:::::G    GGGGG::::GM::::::M   M:::::::M   M::::::M
G:::::G        G::::GM::::::M    M:::::M    M::::::M
 G:::::G       G::::GM::::::M     MMMMM     M::::::M
  G:::::GGGGGGGG::::GM::::::M               M::::::M
   GG:::::::::::::::GM::::::M               M::::::M
     GGG::::::GGG:::GM::::::M               M::::::M
        GGGGGG   GGGGMMMMMMMM               MMMMMMMM
                                                    
 */
contract Gm is ERC721Delegated {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private currentTokenId;
    uint256 public immutable maxSupply;
    uint256 public salePrice;
    GmRenderer public renderer;
    mapping(uint256 => bytes32) private mintSeeds;
    mapping(uint256 => bool) private hasHadCoffee;
    event DrankCoffee(uint256 indexed tokenId, address indexed actor);

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

    function drinkCoffee(uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Needs to own");
        require(!hasHadCoffee[tokenId], "Already had coffee");
        mintSeeds[tokenId] = _generateSeed(tokenId);
        emit DrankCoffee(tokenId, msg.sender);
    }

    // price = 0 == sale not started
    function setSalePrice(uint256 newPrice) public onlyOwner {
        salePrice = newPrice;
    }

    function mintsLeft() external view returns (uint256) {
        return maxSupply - currentTokenId.current();
    }

    function mint(uint256 count) public payable {
        require(currentTokenId.current() + count <= maxSupply, "Gm: sold out");
        require(salePrice != 0, "Gm: sale not started");
        require(count <= 10, "Gm: cannot mint more than 10 in one transaction");
        require(msg.value == salePrice * count, "Gm: wrong sale price");

        for (uint256 i = 0; i < count; i++) {
            mintSeeds[currentTokenId.current()] = _generateSeed(
                currentTokenId.current()
            );
            _mint(msg.sender, currentTokenId.current());
            currentTokenId.increment();
        }
    }

    function burn(uint256 tokenId) public {
        require(
            _isApprovedOrOwner(msg.sender, tokenId),
            "Gm: only approved or owner can burn"
        );
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
        (bytes memory tokenData, bytes memory name, bytes memory bgColor, bytes memory fontColor, bytes memory filter) = renderer.svgRaw(
            mintSeeds[tokenId]
        );

        bytes memory attributes = abi.encodePacked('"attributes": [',
            '{"trait_type":"style","value":"',
            name,
            '"},{"trait_type":"background color","value":"',
            bgColor,
            '"},{"trait_type":"font color","value":"',
            fontColor,
            '"},{"trait_type":"effect","value":"',
            filter,
            '"}]');

        json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"description": "gm-onchain is a collection of 6969 randomly generated, onchain renderings of our favorite crypto phrase. enjoy.",',
                        '"title": "gm ',
                        StringsUpgradeable.toString(tokenId),
                        '", "image": "',
                        svgBase64Data(tokenData),
                        '",',
                        attributes,
                        '}'
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
