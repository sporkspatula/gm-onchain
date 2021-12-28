import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, deployments } from "hardhat";
import { ERC721Base, Gm, GmRenderer__factory, TestBase } from "../typechain";
import { keccak256 } from "ethers/lib/utils";
import { writeFile } from "fs/promises";
import { join } from "path";
// @ts-ignore
import pako from "pako";

const deflate = (str: string) => [
  str.length,
  Buffer.from(
    pako.deflateRaw(Buffer.from(str, "utf-8"), { level: 9 })
  ).toString("hex"),
];

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

  beforeEach(async () => {
    const { Gm } = await deployments.fixture(["ERC721Base", "Gm"]);

    gm = (await ethers.getContractAt("Gm", Gm.address)) as Gm;
    baseNft = (await ethers.getContractAt("TestBase", Gm.address)) as TestBase;

    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  it("mints", async () => {
    // for (let i = 0; i <250; i++) {
      await gm.setSalePrice(1);
      await gm.mint(250, {value: 250});
      // console.log(`Minted ${i}`)
// 
    // }

    const imagesOut = new Array(250);
    for (let i = 0; i < 250; i++) {
      const svg = await getSvgFromTokenId(gm, i);
      console.log(`Fetched Token URI ${i}`)
      imagesOut[
        i
      ] = `<div style="width: 640px; height: 640px;background-image:url('data:image/svg+xml;base64,${Buffer.from(
        svg,
        "utf8"
      ).toString("base64")}"></div>`;
    }

    const result = `<style>svg{margin:10px;}</style><div style="display: grid; grid-template-columns: repeat(10, 1fr);">${imagesOut.join(
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
  // it.only("gets SVG", async () => {
  //   const renderer = GmRenderer__factory.connect(
  //     (await deployments.get("GmRenderer")).address,
  //     signer
  //   );
  //   for (let i = 0; i < 11; i++) {
  //     const r = await renderer.getSvg(i);
  //     const data = Buffer.from(r.substring(2), "hex").toString("utf-8");
  //     await writeFile(join(__dirname, `../ascii/${i}.svg.part`), data);
  //     console.log('');
  //   }
  // });
});
