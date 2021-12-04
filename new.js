import * as fs from "fs";

const day = Number(process.argv[2]);

const files = {
  [`${day}a.js`]: `export default () => {}`,
  [`${day}b.js`]: `export default () => {}`,
  "example.txt": ``,
  "input.txt": ``,
  "prepare.js": `export default (file) => file.trim().split(/\\r?\\n/);`,
  "README.md": `# Day ${day}`,
};

fs.mkdirSync(String(day));
for (const [path, contents] of Object.entries(files)) {
  fs.promises.writeFile(`${day}/${path}`, contents);
}
