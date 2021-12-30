module.exports = async ({ getNamedAccounts, deployments}: any) => {
  const { deploy } = deployments;
  const { deployer, erc721base } = await getNamedAccounts();

  if (!erc721base) {
    const deployResult = await deploy("TestBase", {
      from: deployer,
      args: [],
      log: true,
    });
    // console.log(deployResult)
    // if (deployResult.newlyDeployed) {
    //   console.log(
    //       `contract ERC721 Base deployed at ${deployResult.contract.address} using ${deployResult.receipt.gasUsed} gas`
    //   );
    // }
  }
};
module.exports.tags = ["TestBase"];