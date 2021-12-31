module.exports = async ({ getNamedAccounts, deployments}: any) => {
    const { deploy } = deployments;
    const { deployer, gmData1, gmData2 } = await getNamedAccounts();

    if (!gmData1) {
        const deployResult = await deploy("GmData1", {
            from: deployer,
            args: [],
            log: true,
        });
        // console.log(
        //     `contract Gm Data 1 deployed at ${deployResult.contract.address} using ${deployResult.receipt.gasUsed} gas`
        // );
    }

    if (!gmData2) {
        const deployResult = await deploy("GmData2", {
            from: deployer,
            args: [],
            log: true,
        });
        // console.log(
        //     `contract Gm Data 2 deployed at ${deployResult.contract.address} using ${deployResult.receipt.gasUsed} gas`
        // );
    }
};
module.exports.tags = ["GmData1", "GmData2"];