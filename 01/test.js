import * as fs from "fs/promises";
import sonarSweep from "./1a.js";

const run = async () => {
  let inputStr = await fs.readFile("./01/input.txt");
  inputStr = inputStr.toString();

  const input = inputStr.split("\n").map(Number);
  const out = sonarSweep(input);
  console.log(`Result: ${out}`);
};

run();
