// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

import {ERC721Base, ConfigSettings} from "gwei-slim-nft-contracts/contracts/base/ERC721Base.sol";
import {DelegatedNFTLogic} from "gwei-slim-nft-contracts/contracts/base/DelegatedNFTLogic.sol";

import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";


/// This custom NFT contract stores additional metadata to use for tokenURI
contract ConstitutionWords is DelegatedNFTLogic {
    uint256 public currentTokenId;
    mapping(uint256 => string) metadataJson;

    constructor(
        ERC721Base baseFactory
    )
        DelegatedNFTLogic(
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
