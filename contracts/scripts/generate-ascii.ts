import pako from 'pako';
import figlet, {Fonts} from 'figlet';
import {join} from "path";
import { writeFile, readFile, readdir } from "fs/promises";
import createStatsCollector from "mocha/lib/stats-collector";



function deflate(str: string) {
    return [str.length,Buffer.from(pako.deflateRaw(Buffer.from(str, 'utf-8'), {level: 9})).toString('hex')];
}

async function generateAscii() {
    const fonts: Array<Fonts> = [
        "Mnemonic",
        "Hex",
        "Binary",
        "Morse",
        "3x5",
        "Madrid",
        "Heart Left",
        "ASCII New Roman",
        "Tinker-Toy",
        "JS Cursive",
        "Rowan Cap",
        "Letters",
        "Standard",
        "Puzzle",
        "Slant",
        "Speed",
        "Script",
        "Train",
        "Rozzo",
        "Cards",
        "Tubular",
        "Coinstak",
        "Nipples",
        "Puffy",
        "Keyboard",
        "Fire Font-k",
        "Jazmine",
        "Banner3",
        "Peaks Slant",
        "Henry 3D",
        "Dancing Font",
        "Peaks",
        "Larry 3D",
        "Goofy",
        "Cosmike",
        "Ghoulish",
        "USA Flag",
        "S Blood",
        "Tiles",
        "Roman",
        "Barbwire",
        "Lil Devil",
        "3-D",
        "Arrows",
        "Alligator2",
        "Slant Relief",
        "Bear",
        "Ghost",
        "Big Money-ne",
        "Georgi16",
        "Reverse",
        "Flower Power",
        "Dot Matrix",
        "Acrobatic",
        "Crazy",
        "Isometric3",
        "Poison",
        "AMC AAA01",
        "NV Script",
        "Fraktur",
        "Caligraphy2",
        "Def Leppard",
        "Impossible",
        "3D Diagonal",
        "Broadway",
        "Patorjk-HeX",
        "Patorjk's Cheese",
        "Doh",
        "Alpha"
    ]
    const pathPrefix = join(__dirname, "../ascii/");

    for (const font of fonts) {
        let i = fonts.indexOf(font);
        const str = figlet.textSync('gm', {
            font: font,
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        });

        const splits= str.split("\n")
        const cleaned = []
        for (let i = 0; i < splits.length; i++) {
            const row = splits[i];
            if (row.split('').every(char => char === " ")) {
                continue;
            }
            cleaned.push(row)
        }

        let lines = []
        const startY = ((40 - cleaned.length) / 2) * 16;
        lines.push(font)
        lines.push("<text x='" + 0 + "' y='" + startY + "' class='base'>")
        for (let i = 0; i < cleaned.length; i++) {
            const row = cleaned[i];
            // we dont want to use any blank lines, this will help with scaling

            const cols = row.length;
            const startX = (((64 - cols) / 2) * 10) + 13;
            const formatted = row
                .replace(/&/g, "&#x00026;")
                .replace(/</g, "&#x0003C;")
                .replace(/>/g, "&#x0003E;")
                .replace(/ /g, "&#x000A0;")
                .replace(/!/g, "&#x00021;")
                .replace(/"/g, "&#x00022;")
                .replace(/\$/g, "&#x00024;")
                .replace(/%/g, "&#x00025;")
                .replace(/'/g, "&#x00027;")
                .replace(/\(/g, "&#x00028;")
                .replace(/\(/g, "&#x00029;")
                .replace(/\*/g, "&#x0002A;")
                .replace(/\+/g, "&#x0002B;")
                .replace(/,/g, "&#x0002C;")
                .replace(/-/g, "&#x2212;")
                .replace(/\./g, "&#x0002E;")
                .replace(/\//g, "&#x0002F;")
                .replace(/:/g, "&#x0003A;")
                .replace(/=/g, "&#x0003D;")
                .replace(/\?/g, "&#x0003F;")
                .replace(/@/g, "&#x00040;");






            const line = "<tspan x='" + startX + "' dy ='16'>" + formatted + "</tspan>";
            lines.push(line)
        }
        lines.push("</text>")
        await writeFile(pathPrefix + "/" + i + ".svg.part",  lines.join("\n"));
    }

}

generateAscii();



