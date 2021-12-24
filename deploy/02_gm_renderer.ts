module.exports = async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments;
    const { deployer, corruptionsFont } = await getNamedAccounts();

    let corruptionsFontAddress = corruptionsFont;
    // Deploy in testnet or when no base is deployed
    if (!corruptionsFontAddress) {
        corruptionsFontAddress = (await deployments.get("CorruptionsFont")).address;
    }

    await deploy("GmRenderer", {
        from: deployer,
        args: [corruptionsFontAddress],
        log: true,
    });
};
module.exports.tags = ["GmRenderer"];
module.exports.dependencies = ["CorruptionsFont"];