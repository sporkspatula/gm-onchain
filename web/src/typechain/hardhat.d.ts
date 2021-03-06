/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC2981Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981Upgradeable__factory>;
    getContractFactory(
      name: "ERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Upgradeable__factory>;
    getContractFactory(
      name: "IERC721MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "CourierFont",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CourierFont__factory>;
    getContractFactory(
      name: "Gm",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Gm__factory>;
    getContractFactory(
      name: "GmData1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GmData1__factory>;
    getContractFactory(
      name: "GmData2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GmData2__factory>;
    getContractFactory(
      name: "GmDataInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GmDataInterface__factory>;
    getContractFactory(
      name: "GmRenderer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GmRenderer__factory>;
    getContractFactory(
      name: "ICorruptionsFont",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICorruptionsFont__factory>;
    getContractFactory(
      name: "IGmRendererInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGmRendererInterface__factory>;
    getContractFactory(
      name: "TestBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestBase__factory>;
    getContractFactory(
      name: "ERC721Base",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Base__factory>;
    getContractFactory(
      name: "ERC721Delegated",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Delegated__factory>;
    getContractFactory(
      name: "IBaseERC721Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBaseERC721Interface__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
