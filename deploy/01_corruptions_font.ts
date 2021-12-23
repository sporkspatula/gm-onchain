module.exports = async ({ getNamedAccounts, deployments}: any) => {
    const { deploy } = deployments;
    const { deployer, corruptionsBase } = await getNamedAccounts();

    if (!corruptionsBase) {
        await deploy("CorruptionsFont", {
            from: deployer,
            args: [],
            log: true,
        });
    }
};
module.exports.tags = ["CorruptionsFont"];