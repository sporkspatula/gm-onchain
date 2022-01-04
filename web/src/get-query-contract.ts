import { ethers } from "ethers";
import { NETWORK_ID, RPC_URL, GM_CONTRACT } from "./env-vars";
import { Gm__factory } from "../src/typechain/factories/Gm__factory";
import { ERC721Base__factory } from "../src/typechain/factories/ERC721Base__factory";

export async function getTokenInfo(tokenId: string) {
  const provider = new ethers.providers.JsonRpcBatchProvider(
    RPC_URL,
    parseInt(NETWORK_ID || "4")
  );
  const contract = Gm__factory.connect(GM_CONTRACT, provider);
  const base = ERC721Base__factory.connect(GM_CONTRACT, provider);
  const [uri, owner] = await Promise.all([
    contract.tokenURI(tokenId),
    base.ownerOf(tokenId),
  ]);
  const json = Buffer.from(
    uri.substring(uri.indexOf(",") + 1),
    "base64"
  ).toString("utf-8");
  const data = JSON.parse(json);
  return {
    data,
    owner,
  };
}

export function getQueryContract() {
  const provider = new ethers.providers.JsonRpcBatchProvider(
    RPC_URL,
    parseInt(NETWORK_ID || "4")
  );
  return Gm__factory.connect(GM_CONTRACT, provider);
}

export async function getMintInfo() {
  const queryContract = getQueryContract();
  const [maxSupply, mintsLeft, salePrice] = await Promise.all([
    queryContract.maxSupply(),
    queryContract.mintsLeft(),
    queryContract.salePrice(),
  ]);
  return {
    maxSupply: maxSupply.toNumber(),
    mintsLeft: mintsLeft.toNumber(),
    salePrice: salePrice.toString(),
  };
}
