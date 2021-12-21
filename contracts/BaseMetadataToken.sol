// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

import {IBaseERC721Interface, ConfigSettings} from "gwei-slim-nft-contracts/contracts/base/ERC721Base.sol";
import {ERC721Delegated} from "gwei-slim-nft-contracts/contracts/base/ERC721Delegated.sol";

import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";


/// This custom NFT contract stores additional metadata to use for tokenURI
contract BaseMetadataToken is ERC721Delegated {
    uint256 public currentTokenId;
    mapping(uint256 => string) metadataJson;

    constructor(
        address baseFactory
    )
        ERC721Delegated(
            baseFactory,
            "Constitution Words",
            "CONST",
            ConfigSettings({
                royaltyBps: 1000,
                uriBase: "",
                uriExtension: "",
                hasTransferHook: false
            })
        )
    {}

    function mint(string memory nftMetadata) public {
        metadataJson[currentTokenId] = nftMetadata;
        _mint(msg.sender, currentTokenId++);
    }

    function burn(uint256 tokenId) public {
        _burn(tokenId);
        metadataJson[tokenId] = "";
    }

    function tokenURI(uint256 tokenId) external view returns (string memory) {
        return metadataJson[tokenId];
    }
}
