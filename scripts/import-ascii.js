const pako = require("pako");
const { join } = require("path");
const { writeFile, readFile, readdir } = require("fs/promises");

async function main() {
  const deflate = (str) => [
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
  for (let [indx, result] of results.entries()) {
    template += `
    if (index == ${indx}) {
      compressedImage = hex"${result.hexBuf}";
      compressedSize = ${result.sz};
      imageName = "${result.name}";
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
