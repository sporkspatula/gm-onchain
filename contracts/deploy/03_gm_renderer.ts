module.exports = async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments;
    const { deployer, courierFont, gmData1, gmData2 } = await getNamedAccounts();

    let courierFontAddress = courierFont;
    let gmData1Address = gmData1;
    let gmData2Address = gmData2;
    // Deploy in testnet or when no base is deployed
    if (!courierFontAddress) {
        courierFontAddress = (await deployments.get("CourierFont")).address;
    }

    if (!gmData1Address) {
        gmData1Address = (await deployments.get("GmData1")).address;
        //console.log(`GmData1 Address: ${gmData1Address}`)
    }
    if (!gmData2Address) {
        gmData2Address = (await deployments.get("GmData2")).address;
        //console.log(`GmData1 Address: ${gmData1Address}`)
    }

    try {
        const deployResult = await deploy("GmRenderer", {
            from: deployer,
            args: [courierFontAddress, gmData1Address, gmData2Address],
            log: true,
        });

        // console.log(
        //     `contract Gm Renderer deployed at ${deployResult.contract.address} using ${deployResult.receipt.gasUsed} gas`
        // );


    } catch (err) {
        console.log(err);
        throw err;
    }
};
module.exports.tags = ["GmRenderer"];
module.exports.dependencies = ["CourierFont", "GmData1", "GmData2"];
