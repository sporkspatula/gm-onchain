/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  GmDataInterface,
  GmDataInterfaceInterface,
} from "../GmDataInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSvg",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "imageName",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "compressedImage",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "compressedSize",
            type: "uint256",
          },
        ],
        internalType: "struct GmDataInterface.GmDataSet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class GmDataInterface__factory {
  static readonly abi = _abi;
  static createInterface(): GmDataInterfaceInterface {
    return new utils.Interface(_abi) as GmDataInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmDataInterface {
    return new Contract(address, _abi, signerOrProvider) as GmDataInterface;
  }
}
