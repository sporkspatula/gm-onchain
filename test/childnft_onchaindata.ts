import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, deployments } from "hardhat";
import { ERC721Base, Gm, TestBase } from "../typechain";
import {keccak256} from "ethers/lib/utils";

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

  function getSeedWithAsciiMod(mod: number) {
    // convert to bytes
    // grab 4 bytes
    let byteArr;
    let asciiInt;
    let asciiMod;
    let seed;

    // TODO: this doesnt alway match up with contract
    do {
      byteArr = ethers.utils.randomBytes(32)
      const dataView = new DataView(byteArr.buffer, 6, 4);
      asciiInt = dataView.getUint32(0, true);
      asciiMod = asciiInt % 6
      seed = ethers.utils.hexlify(byteArr)
    } while (asciiMod != mod)

    console.log(`Found Seed ${seed} for Mod ${mod}`);
    return seed
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

    // mod 0

    const seed0 = getSeedWithAsciiMod(0)
    console.log(seed0)
    await gm.mint(seed0);
    const svg0 = await getSvgFromTokenId(gm, 0)

    // mod 1
    const seed1 = getSeedWithAsciiMod(1)
    await gm.mint(seed1)
    console.log(seed1)

    const svg1 = await getSvgFromTokenId(gm, 1)

    const seed2 = getSeedWithAsciiMod(2)
    await gm.mint(seed2)
    console.log(seed2)
    const svg2 = await getSvgFromTokenId(gm, 2)

    const seed3 = getSeedWithAsciiMod(3)
    await gm.mint(seed3)
    console.log(seed3)
    const svg3 = await getSvgFromTokenId(gm, 3)

    const seed4 = getSeedWithAsciiMod(4)
    await gm.mint(seed4)
    console.log(seed4)
    const svg4 = await getSvgFromTokenId(gm, 4)

    const seed5 = getSeedWithAsciiMod(5)
    await gm.mint(seed5)
    console.log(seed5)
    const svg5 = await getSvgFromTokenId(gm, 5)

    console.log("MONEY")
    console.log(svg0)
    console.log("\n")

    console.log("ASTERISK")
    console.log(svg1)
    console.log("\n")

    console.log("SCRIPT")
    console.log(svg2)
    console.log("\n")

    console.log("STICKS")
    console.log(svg3)
    console.log("\n")

    console.log("DEVIL")
    console.log(svg4)
    console.log("\n")

    console.log("ALLIGATOR")
    console.log(svg5)
    console.log("\n")
  });
});
