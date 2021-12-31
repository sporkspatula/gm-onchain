import { ethers } from "ethers";
import { Gm__factory } from "./typechain/factories/Gm__factory";

export function getQueryContract() {
  const provider = new ethers.providers.JsonRpcBatchProvider(
    process.env.RPC_URL,
    parseInt(process.env.NETWORK_ID || '4')
  );
  return Gm__factory.connect(process.env.CONTRACT_ADDRESS, provider);
}
