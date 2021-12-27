import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, deployments } from "hardhat";
import { ERC721Base, Gm, GmRenderer__factory, TestBase } from "../typechain";
import { keccak256 } from "ethers/lib/utils";
import { writeFile } from "fs/promises";
import { join } from "path";
// @ts-ignore
import pako from 'pako';

const deflate = (str: string) => [str.length,Buffer.from(pako.deflateRaw(Buffer.from(str, 'utf-8'), {level: 9})).toString('hex')]

describe("Gm", () => {
  let signer: SignerWithAddress;
  let signerAddress: string;
  let gm: Gm;
  let baseNft: ERC721Base;

  async function getSvgFromTokenId(gm: Gm, tokenId: number) {
    const tokenURI = await gm.tokenURI(tokenId);
    const [_, base64Uri] = tokenURI.split(",");
    const buff = Buffer.from(base64Uri, "base64");
    const decoded = JSON.parse(buff.toString("utf-8"));
    const [__, svgBase64] = decoded.image.split(",");
    const svgBuff = Buffer.from(svgBase64, "base64");
    const svg = svgBuff.toString("utf-8");
    return svg;
  }

  function getSeedAsciiMod(seed: string) {
    // convert to bytes
    // grab 4 bytes
    const byteArr = ethers.utils.arrayify(seed);
    const dataView = new DataView(byteArr.buffer, 6, 4);
    const asciiInt = dataView.getUint32(0, true);
    const asciiMod = asciiInt % 6;
    return asciiMod;
  }

  beforeEach(async () => {
    const { Gm } = await deployments.fixture(["ERC721Base", "Gm"]);

    gm = (await ethers.getContractAt("Gm", Gm.address)) as Gm;
    baseNft = (await ethers.getContractAt("TestBase", Gm.address)) as TestBase;

    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  it("mints", async () => {
    for (let i = 0; i < 100; i++) {
      await gm.mint();
    }

    const imagesOut = new Array(100);
    for (let i = 0; i < 100; i++) {
      const svg = await getSvgFromTokenId(gm, i);
      const seed = await gm.seed(i);
      console.log(seed);
      const mod = await getSeedAsciiMod(seed);
      imagesOut[
        i
      ] = `<div style="width: 1536px; height: 1024px;background-image:url('data:image/svg+xml;base64,${Buffer.from(
        svg,
        "utf8"
      ).toString("base64")}"></div>`;
    }

    const result = `<style>svg{margin:10px;}</style><div style="display: grid; grid-template-columns: repeat(2, 1fr);">${imagesOut.join(
      "\n"
    )}</div>`;
    await writeFile(join(__dirname, "./out.html"), result);
  });
  // it.only("gets lines", async () => {
  //   const renderer = GmRenderer__factory.connect(
  //     (await deployments.get("GmRenderer")).address,
  //     signer
  //   );
  //   for (let i = 0; i < 12; i++) {
  //     const body = await renderer.svgBody(i);
  //     const [len, amt] = deflate(body);
  //     console.log(`
  //     if (index == ${i}) {
  //       compressedImage = 
  //           hex"${amt}";
  //       compressedSize = ${len};
  //     } 
  //     `)

  //   }
  // });
  it("gets SVG", async () => {
    const renderer = GmRenderer__factory.connect(
      (await deployments.get("GmRenderer")).address,
      signer
    );
    const r = await renderer.getSvg(0);
    console.log('result');
    console.log(Buffer.from(r.substring(2), 'hex').toString('utf-8'));
  });
});
