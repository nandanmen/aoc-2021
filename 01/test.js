import * as fs from "fs/promises";

import sonarSweep from "./1a.js";
import sonarSweepSliding from "./1b.js";

const exampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
console.log("1a:", sonarSweep(exampleInput));
console.log("1b:", sonarSweepSliding(exampleInput));

const run = async () => {
  let inputStr = await fs.readFile("./01/input.txt");
  inputStr = inputStr.toString();

  const input = inputStr.split("\n").map(Number);
  console.log(`Result (1a): ${sonarSweep(input)}`);
  console.log(`Result (1b): ${sonarSweepSliding(input)}`);
};

run();
