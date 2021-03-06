/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface GmRendererInterface extends ethers.utils.Interface {
  functions: {
    "decompress(tuple)": FunctionFragment;
    "svgRaw(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "decompress",
    values: [
      {
        imageName: BytesLike;
        compressedImage: BytesLike;
        compressedSize: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "svgRaw",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "decompress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "svgRaw", data: BytesLike): Result;

  events: {};
}

export class GmRenderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GmRendererInterface;

  functions: {
    decompress(
      gmData: {
        imageName: BytesLike;
        compressedImage: BytesLike;
        compressedSize: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    svgRaw(
      tokenId: BigNumberish,
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string]>;
  };

  decompress(
    gmData: {
      imageName: BytesLike;
      compressedImage: BytesLike;
      compressedSize: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  svgRaw(
    tokenId: BigNumberish,
    seed: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  callStatic: {
    decompress(
      gmData: {
        imageName: BytesLike;
        compressedImage: BytesLike;
        compressedSize: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    svgRaw(
      tokenId: BigNumberish,
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string]>;
  };

  filters: {};

  estimateGas: {
    decompress(
      gmData: {
        imageName: BytesLike;
        compressedImage: BytesLike;
        compressedSize: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    svgRaw(
      tokenId: BigNumberish,
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decompress(
      gmData: {
        imageName: BytesLike;
        compressedImage: BytesLike;
        compressedSize: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    svgRaw(
      tokenId: BigNumberish,
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
