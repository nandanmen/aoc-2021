import * as fs from "fs";

const year = Number(process.argv[2]);
const day = Number(process.argv[3]);

const files = {
  [`${day}a.js`]: `export default () => {}`,
  [`${day}b.js`]: `export default () => {}`,
  "example.txt": ``,
  "input.txt": ``,
  "prepare.js": `export default (file) => file.trim().split(/\\r?\\n/);`,
  "README.md": `# Day ${day}`,
};

fs.mkdirSync(`${year}/${day}`);
for (const [path, contents] of Object.entries(files)) {
  fs.promises.writeFile(`${year}/${day}/${path}`, contents);
}
