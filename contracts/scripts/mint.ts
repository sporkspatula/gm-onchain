
import dotenv from 'dotenv';

// Setup env from .env file if present
import {
    ERC721Base,
    Gm,
    Gm__factory,
    TestBase,
} from "../typechain";
import { ethers, deployments } from "hardhat";

import { Wallet } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider } from '@ethersproject/abstract-provider';

dotenv.config();

async function mint() {
    const pk = process.env.PRIVATE_KEY as string
    const gmAddress = process.env.GM_ADDRESS as string
    const provider_url = process.env.RINKEBY_RPC as string
    const wallet = (await ethers.getSigners())[0]

    const gm = (await ethers.getContractAt("Gm", gmAddress)) as Gm;
    //const gm = Gm__factory.connect("0x6293bbfEf55221C233b3de29bD5852fAF97e1C0E", wallet)

    for (let i = 0; i < 690; i++) {
        await gm.mint(10, { value: "10000000000000000" });
        console.log(`Minted ${i} * 10`);
    }
}

mint();



