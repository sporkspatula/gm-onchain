// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

import {IBaseERC721Interface, ConfigSettings} from "gwei-slim-nft-contracts/contracts/base/ERC721Base.sol";
import {ERC721Delegated} from "gwei-slim-nft-contracts/contracts/base/ERC721Delegated.sol";

import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {GmRenderer} from './GmRenderer.sol';

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

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        bytes32 seed = mintSeeds[tokenId];
        return renderer.tokenURI(tokenId, seed);
    }

    function seed(uint256 tokenId) external view returns (bytes32) {
        return mintSeeds[tokenId];
    }

    function _generateSeed(uint256 tokenId) private returns(bytes32) {
        return keccak256(abi.encodePacked(block.timestamp, msg.sender, tokenId));
    }

}
