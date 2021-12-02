import * as fs from "fs/promises";

import dive from "./2a.js";
import diveAim from "./2b.js";

const readFile = async (path) => {
  let inputStr = await fs.readFile(path);
  return inputStr.toString();
};

const prepare = (file) => file.trim().split(/\r?\n/);

const run = async () => {
  const example = prepare(await readFile("./02/example.txt"));
  const input = prepare(await readFile("./02/input.txt"));

  console.log(`2a`);
  console.log(` Example: ${dive(example)}`);
  console.log(` Result: ${dive(input)}`);

  console.log(`2b`);
  console.log(` Example: ${diveAim(example)}`);
  console.log(` Result: ${diveAim(input)}`);
};

run();
