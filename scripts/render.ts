import { writeFile } from "fs/promises";
import {join} from 'path'

async function run(){
    const imagesOut = new Array(500);
    for (let i = 0; i < imagesOut.length; i++) {
        console.log('at ', i)
        imagesOut[i] = (await gm.getSVG(i))[0];
    }
    console.log(imagesOut);
    const result = `<style>svg{margin:10px;}</style><div style="display: grid; grid-template-columns: repeat(4, 1fr);">${imagesOut.join("\n")}</div>`;
    await writeFile(join(__dirname, "./out.html"), result);
}

run()


