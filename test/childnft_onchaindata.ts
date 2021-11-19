import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, deployments } from "hardhat";
import { ERC721Base, BaseMetadataToken, TestBase } from "../typechain";

describe("BaseMetadataToken", () => {
  let signer: SignerWithAddress;
  let signerAddress: string;
  let childNft: BaseMetadataToken;
  let baseNft: ERC721Base;

  beforeEach(async () => {
    const { BaseMetadataToken } = await deployments.fixture([
      "ERC721Base",
      "BaseMetadataToken",
    ]);

    childNft = (await ethers.getContractAt(
      "BaseMetadataToken",
      BaseMetadataToken.address
    )) as BaseMetadataToken;
    baseNft = (await ethers.getContractAt(
      "TestBase",
      BaseMetadataToken.address
    )) as TestBase;

    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  it("mints", async () => {
    await childNft.mint(JSON.stringify({name: "amazing", description: "on-chain content"}));
    expect(await baseNft.ownerOf(0)).to.be.equal(signerAddress)
    expect(await baseNft.name()).to.be.equal('Constitution Words');
    await baseNft.burn(0);
    await childNft.mint(JSON.stringify({name: "amazing", description: "on-chain content"}));
    await childNft.mint(JSON.stringify({name: "amazing", description: "on-chain content"}));
    await baseNft.setApprovalForAll(ethers.constants.AddressZero, true);
  });
});
