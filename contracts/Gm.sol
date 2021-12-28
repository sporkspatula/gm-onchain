// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

import {IBaseERC721Interface, ConfigSettings} from "gwei-slim-nft-contracts/contracts/base/ERC721Base.sol";
import {ERC721Delegated} from "gwei-slim-nft-contracts/contracts/base/ERC721Delegated.sol";

import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {GmRenderer} from "./GmRenderer.sol";
import {Base64} from "base64-sol/base64.sol";

/// This custom NFT contract stores additional metadata to use for tokenURI
contract Gm is ERC721Delegated {
    uint256 public currentTokenId;
    uint256 public maxSupply;
    GmRenderer public renderer;
    mapping(uint256 => bytes32) mintSeeds;

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

    function mint() public {
        require(currentTokenId < maxSupply, "gm, mint is sold out");
        mintSeeds[currentTokenId] = _generateSeed(currentTokenId);
        _mint(msg.sender, currentTokenId++);
    }

    function burn(uint256 tokenId) public {
        _burn(tokenId);
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
        (bytes memory tokenData, bytes memory name) = renderer.svgRaw(tokenId, mintSeeds[tokenId]);
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

    function _generateSeed(uint256 tokenId) private returns (bytes32) {
        return
            keccak256(abi.encodePacked(block.timestamp, msg.sender, tokenId));
    }
}
