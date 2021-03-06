module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer, erc721base, gmRenderer } = await getNamedAccounts();

  let baseAddress = erc721base;
  let gmRendererAddress = gmRenderer

  // Deploy in testnet or when no base is deployed
  if (!baseAddress) {
    baseAddress = (await deployments.get("TestBase")).address;
  }

  if (!gmRendererAddress) {
    gmRendererAddress = (await deployments.get("GmRenderer")).address;
  }

  const maxSupply = process.env.GM_MAX_SUPPLY;
  console.log("GM MAX SUPPLY", maxSupply)

  const deployResult = await deploy("Gm", {
    from: deployer,
    args: [baseAddress, gmRendererAddress, maxSupply],
    log: true,
  });

  // console.log(
  //     `contract Gm deployed at ${deployResult.contract.address} using ${deployResult.receipt.gasUsed} gas`
  // );


};
module.exports.tags = ["Gm"];
module.exports.dependencies = ["TestBase", "GmRenderer", "GmData1", "GmData2"];
