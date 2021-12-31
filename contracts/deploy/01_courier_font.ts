module.exports = async ({ getNamedAccounts, deployments}: any) => {
    const { deploy } = deployments;
    const { deployer, courierFont } = await getNamedAccounts();

    if (!courierFont) {
        const deployResult = await deploy("CourierFont", {
            from: deployer,
            args: [],
            log: true,
        });
        // console.log(deployResult)
        // console.log(
        //     `contract Courier Font deployed at ${deployResult.contract.address} using ${deployResult.receipt.gasUsed} gas`
        // );
    }
};
module.exports.tags = ["CourierFont"];