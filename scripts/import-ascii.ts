import pako from "pako";
import { join } from "path";
import { writeFile, readFile, readdir } from "fs/promises";

async function main() {
  const deflate = (str: string) => [
    str.length,
    Buffer.from(
      pako.deflateRaw(Buffer.from(str, "utf-8"), { level: 9 })
    ).toString("hex"),
  ];

  const pathPrefix = join(__dirname, "../ascii/");

  const asciis = await readdir(pathPrefix);
  let results = [];
  for (let ascii of asciis) {
    const file = await (
      await readFile(join(pathPrefix, ascii))
    ).toString("utf-8");
    const [name, ...svg] = file.split("\n");
    const [sz, hexBuf] = deflate(svg.join('').trim());
    results.push({ name, sz, hexBuf });
  }

  const sorted = results.sort((a,b) =>
    a.sz > b.sz ? 1 : -1
  );

  let template1 = "";
  let template2 = "";
  for (let i = 0; i < sorted.length; i++) {
    if (i < 50) {
      template1 += `
    if (index == ${i}) {
      data.compressedImage = hex"${sorted[i].hexBuf}";
      data.compressedSize = ${sorted[i].sz};
      data.imageName = "${sorted[i].name}";
    }
    `;
    } else {
      template2 += `
    if (index == ${i}) {
      data.compressedImage = hex"${sorted[i].hexBuf}";
      data.compressedSize = ${sorted[i].sz};
      data.imageName = "${sorted[i].name}";
    }
  `;
    }

  }

    const solidityPath1 = join(__dirname, `../contracts/GmData1.sol`);
    const sourceFile1 = (await readFile(solidityPath1)).toString('utf-8');
    const START_TAG = "// AUTOGEN:START";
    const start1 = sourceFile1.substring(0, sourceFile1.indexOf(START_TAG) + START_TAG.length);
    const end1 = sourceFile1.substring(
        sourceFile1.indexOf("// AUTOGEN:END"),
        sourceFile1.length
    );
    if (!start1 || !end1) {
      throw new Error('Start or end template tags missing in GmData1');
    }
    await writeFile(solidityPath1, [start1, template1, end1].join("\n"));

  const solidityPath2 = join(__dirname, `../contracts/GmData2.sol`);
  const sourceFile2 = (await readFile(solidityPath2)).toString('utf-8');
  const start2 = sourceFile2.substring(0, sourceFile2.indexOf(START_TAG) + START_TAG.length);
  const end2 = sourceFile2.substring(
      sourceFile2.indexOf("// AUTOGEN:END"),
      sourceFile2.length
  );
  if (!start2 || !end2) {
    throw new Error('Start or end template tags missing in GmData2');
  }
  await writeFile(solidityPath2, [start2, template2, end2].join("\n"));



}

main();
