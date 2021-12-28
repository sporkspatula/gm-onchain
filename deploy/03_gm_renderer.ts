module.exports = async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments;
    const { deployer, corruptionsFont, gmData } = await getNamedAccounts();

    let corruptionsFontAddress = corruptionsFont;
    let gmDataAddress = gmData;
    // Deploy in testnet or when no base is deployed
    if (!corruptionsFontAddress) {
        corruptionsFontAddress = (await deployments.get("CourierFont")).address;
    }

    if (!gmDataAddress) {
        gmDataAddress = (await deployments.get("GmData")).address;
    }

    try {
        await deploy("GmRenderer", {
            from: deployer,
            args: [corruptionsFontAddress, gmDataAddress],
            log: true,
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};
module.exports.tags = ["GmRenderer"];
module.exports.dependencies = ["CourierFont", "GmData"];
