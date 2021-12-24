import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, deployments } from "hardhat";
import { ERC721Base, Gm, TestBase } from "../typechain";
import {keccak256} from "ethers/lib/utils";
import {writeFile} from "fs/promises";
import {join} from "path";

describe("Gm", () => {
  let signer: SignerWithAddress;
  let signerAddress: string;
  let gm: Gm;
  let baseNft: ERC721Base;

  async function getSvgFromTokenId(gm: Gm, tokenId: number){
    const tokenURI = await gm.tokenURI(tokenId)
    const [_, base64Uri] = tokenURI.split(",")
    const buff = Buffer.from(base64Uri, 'base64')
    const decoded = JSON.parse(buff.toString('utf-8'))
    const [__, svgBase64] = decoded.image.split(",")
    const svgBuff = Buffer.from(svgBase64, 'base64')
    const svg = svgBuff.toString("utf-8")
    return svg
  }

  function getSeedAsciiMod(seed: string) {
    // convert to bytes
    // grab 4 bytes
    const byteArr = ethers.utils.arrayify(seed)
    const dataView = new DataView(byteArr.buffer, 6, 4);
    const asciiInt = dataView.getUint32(0, true);
    const asciiMod = asciiInt % 6
    return asciiMod
  }

  beforeEach(async () => {
    const { Gm } = await deployments.fixture([
      "ERC721Base",
      "Gm",
    ]);

    gm = (await ethers.getContractAt(
      "Gm",
      Gm.address
    )) as Gm;
    baseNft = (await ethers.getContractAt(
      "TestBase",
      Gm.address
    )) as TestBase;

    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  it("mints", async () => {

    for (let i = 0; i < 25; i++){
      await gm.mint();
    }

    const imagesOut = new Array(25);
    for (let i = 0; i < 25; i++){
      const svg = await getSvgFromTokenId(gm, i)
      const seed = await gm.seed(i)
      console.log(seed)
      const mod = await getSeedAsciiMod(seed)
      imagesOut[i] = svg;
    }

    const result = `<style>svg{margin:10px;}</style><div style="display: grid; grid-template-columns: repeat(4, 1fr);">${imagesOut.join("\n")}</div>`;
    await writeFile(join(__dirname, "./out.html"), result);
  });
});
