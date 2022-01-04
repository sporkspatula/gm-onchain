module.exports = async ({ getNamedAccounts, deployments}: any) => {
  const { deploy } = deployments;
  const { deployer, erc721base } = await getNamedAccounts();

  // TODO: verify we arent deploying erc721base
  if (!erc721base) {
    const deployResult = await deploy("TestBase", {
      from: deployer,
      args: [],
      log: true,
    });
  }
};
module.exports.tags = ["TestBase"];