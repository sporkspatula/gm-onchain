import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import "@nomiclabs/hardhat-ethers";
import chai, { expect } from 'chai';
import asPromised from "chai-as-promised";
import { ethers, deployments } from "hardhat";
import { BigNumber } from "ethers";
import {
  ERC721Base,
  Gm,
  TestBase,
} from "../typechain";

chai.use(asPromised);

import { keccak256 } from "ethers/lib/utils";
import { writeFile } from "fs/promises";
import { join } from "path";
// @ts-ignore
describe("Gm", () => {
  let owner: SignerWithAddress;
  let otherAccount: SignerWithAddress;
  let anotherAccount: SignerWithAddress;
  let gm: Gm;
  let baseNft: ERC721Base;
  let salePrice: BigNumber

  async function getSvgFromTokenId(gm: Gm, tokenId: number) {
    const tokenURI = await gm.tokenURI(tokenId);
    const [_, base64Uri] = tokenURI.split(",");
    const buff = Buffer.from(base64Uri, "base64");
    console.log(buff.toString("utf-8"));
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

    [owner, otherAccount, anotherAccount]  = await ethers.getSigners();
    salePrice = BigNumber.from("1000000000000000000")
  });

  describe("#transferOwnership", () => {
    it("successfully transfers ownership", async () => {
      const prevOwnerAddress = await baseNft.owner();
      expect(prevOwnerAddress.toLowerCase()).eq(owner.address.toLowerCase())
      await baseNft.transferOwnership(otherAccount.address)
      const newOwnerAddress = await baseNft.owner();
      expect(newOwnerAddress.toLowerCase()).eq(otherAccount.address.toLowerCase())
    })
  })

  describe("#setSalePrice", () => {
    it("reverts if called by non owner address", async () => {
      await expect(gm.connect(otherAccount).setSalePrice(salePrice)).eventually.rejectedWith("Not owner")
    })

    it("owner can call #setSalePrice", async () => {
      const prevSalePrice = await gm.salePrice()
      expect(prevSalePrice).eq(BigNumber.from("0"))
      await baseNft.transferOwnership(otherAccount.address)
      await gm.connect(otherAccount).setSalePrice(salePrice)
      const computedSalePrice = await gm.salePrice()
      expect(computedSalePrice).eq(salePrice)
    })
  })

  describe('#withdrawal', () => {
    it("reverts if called by non owner address", async () => {
      await expect(gm.connect(otherAccount).withdraw()).eventually.rejectedWith("Not owner")
    })

    it("transfers eth in contract to owner", async () => {
      const prevGmBalance = await gm.provider.getBalance(gm.address)
      expect(prevGmBalance).eq(BigNumber.from("0"))
      await gm.setSalePrice(salePrice);
      for (let i = 0; i < 10; i++) {
        await gm.connect(otherAccount).mint(10, { value: salePrice.mul(BigNumber.from(10)) })
      }
      const postMintGmBalance = await gm.provider.getBalance(gm.address)
      expect(postMintGmBalance).eq(salePrice.mul(BigNumber.from(100)))

      const preWithdrawalOwnerBalance = await gm.provider.getBalance(owner.address)

      const tx  = await gm.withdraw()
      const receipt = await gm.provider.getTransactionReceipt(tx.hash)

      const postWithdrawalOwnerBalance = await gm.provider.getBalance(owner.address)

      // owner balance equals preWithdrawalBalance + postMintGmBalance - gas used in withdrawal tx
      expect(postWithdrawalOwnerBalance).eq(preWithdrawalOwnerBalance.add(postMintGmBalance).sub(receipt.gasUsed.mul(receipt.effectiveGasPrice)))

      const postWithdrawalGmBalance = await gm.provider.getBalance(gm.address)
      // gm balance is now 0
      expect(postWithdrawalGmBalance).eq(BigNumber.from(0))
    })
  })

  describe("#mint", () => {
    it("reverts if sale price not set", async () => {
      await expect(gm.mint(1, { value: BigNumber.from("1000000000000000000") })).eventually.rejectedWith("Gm: sale not started");
    });

    it("reverts if a number larger than 10 is supplied", async () => {
      await gm.setSalePrice(salePrice);
      await expect(gm.mint(11, { value: salePrice })).eventually.rejectedWith("Gm: cannot mint more than 10 in one transaction");
    })

    it("reverts if exceeds max supply", async () => {
      await gm.setSalePrice(salePrice);
      for (let i = 0; i < 10; i++) {
        await gm.connect(otherAccount).mint(10, { value: salePrice.mul(BigNumber.from(10)) })
      }

      await expect(gm.connect(otherAccount).mint(1, { value: salePrice })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(2, { value: salePrice.mul(BigNumber.from(2)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(3, { value: salePrice.mul(BigNumber.from(3)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(4, { value: salePrice.mul(BigNumber.from(4)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(5, { value: salePrice.mul(BigNumber.from(5)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(6, { value: salePrice.mul(BigNumber.from(6)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(7, { value: salePrice.mul(BigNumber.from(7)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(8, { value: salePrice.mul(BigNumber.from(8)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(9, { value: salePrice.mul(BigNumber.from(9)) })).eventually.rejectedWith("Gm: mint would exceed max supply");
      await expect(gm.connect(otherAccount).mint(10, { value: salePrice.mul(BigNumber.from(10)) })).eventually.rejectedWith("Gm: mint would exceed max supply");

    })
    
    it("reverts if sent wrong price", async () => {
      await gm.setSalePrice(salePrice);
      // under price
      await expect(gm.connect(otherAccount).mint(2, { value: salePrice })).eventually.rejectedWith("Gm: wrong sale price");
      // over price
      await expect(gm.connect(otherAccount).mint(2, { value: salePrice.mul(BigNumber.from(4)) })).eventually.rejectedWith("Gm: wrong sale price");
    })

    it("callable by any address", async () => {
      await gm.setSalePrice(salePrice);
      await expect (gm.mint(1, { value: salePrice})).eventually.not.rejected;
      await expect (gm.connect(otherAccount).mint(1, { value: salePrice})).eventually.not.rejected;
      await expect (gm.connect(anotherAccount).mint(1, { value: salePrice})).eventually.not.rejected;
    })
  });

  it("integration-mints", async () => {
    await gm.setSalePrice(1);
    for (let i = 0; i < 10; i++) {
      await gm.mint(10, { value: 10 });
      console.log(`Minted ${i} * 10`);
    }

    const imagesOut = new Array(100);
    for (let i = 0; i < 100; i++) {
      const svg = await getSvgFromTokenId(gm, i);
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
});
