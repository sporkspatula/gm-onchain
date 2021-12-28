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

  console.log(results);
  let template = "";
  for (let i = 0; i < results.length; i++) {
    template += `
    if (index == ${i}) {
      compressedImage = hex"${results[i].hexBuf}";
      compressedSize = ${results[i].sz};
      imageName = "${results[i].name}";
    }
  `;
  }

  const solidityPath = join(__dirname, "../contracts/GMArtLib.sol");
  const sourceFile = (await readFile(solidityPath)).toString('utf-8');
  const START_TAG = "// AUTOGEN:START";
  const start = sourceFile.substring(0, sourceFile.indexOf(START_TAG) + START_TAG.length);
  const end = sourceFile.substring(
    sourceFile.indexOf("// AUTOGEN:END"),
    sourceFile.length
  );
  if (!start || !end) {
    throw new Error('Start or end template tags missing');
  }
  await writeFile(solidityPath, [start, template, end].join("\n"));
}

main();
