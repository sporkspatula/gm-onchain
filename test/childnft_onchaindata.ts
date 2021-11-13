import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, deployments } from "hardhat";
import { ERC721Base, ConstitutionWords, TestBase } from "../typechain";

describe("ConstitutionWords", () => {
  let signer: SignerWithAddress;
  let signerAddress: string;
  let childNft: ConstitutionWords;
  let baseNft: ERC721Base;

  beforeEach(async () => {
    const { ConstitutionWords } = await deployments.fixture([
      "ERC721Base",
      "ConstitutionWords",
    ]);

    childNft = (await ethers.getContractAt(
      "ConstitutionWords",
      ConstitutionWords.address
    )) as ConstitutionWords;
    baseNft = (await ethers.getContractAt(
      "TestBase",
      ConstitutionWords.address
    )) as TestBase;

    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  it("mints", async () => {
    await childNft.mint(JSON.stringify({name: "amazing", description: "on-chain content"}));
    expect(await baseNft.ownerOf(0)).to.be.equal(signerAddress)
    expect(await baseNft.name()).to.be.equal('Constitution Words');
    await childNft.mint(JSON.stringify({name: "amazing", description: "on-chain content"}));
    await childNft.mint(JSON.stringify({name: "amazing", description: "on-chain content"}));
    await baseNft.setApprovalForAll(ethers.constants.AddressZero, true);
  });
});
