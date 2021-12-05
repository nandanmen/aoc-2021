import * as fs from "fs/promises";

const readFile = async (path) => {
  let inputStr = await fs.readFile(path);
  return inputStr.toString();
};

const importDefault = async (path) => {
  return (await import(path)).default;
};

const run = async () => {
  const [problem] = process.argv.slice(2);
  const [problemNumber] = problem.split(/[a|b]/);
  const number = Number(problemNumber);

  const runFirstPart = problem.endsWith("a");
  const runSecondPart = problem.endsWith("b");

  let firstAlgorithm;
  let secondAlgorithm;

  if (runFirstPart) {
    firstAlgorithm = await importDefault(`./${number}/${number}a.js`);
  }

  if (runSecondPart) {
    secondAlgorithm = await importDefault(`./${number}/${number}b.js`);
  }

  if (!runFirstPart && !runSecondPart) {
    firstAlgorithm = await importDefault(`./${number}/${number}a.js`);
    secondAlgorithm = await importDefault(`./${number}/${number}b.js`);
  }

  const prepare = await importDefault(`./${number}/prepare.js`);

  const exampleArgs = prepare(await readFile(`./${number}/example.txt`));
  const inputArgs = prepare(await readFile(`./${number}/input.txt`));

  const example = Array.isArray(exampleArgs) ? exampleArgs : [exampleArgs];
  const input = Array.isArray(inputArgs) ? inputArgs : [inputArgs];

  if (firstAlgorithm) {
    console.log(`${number}a`);
    console.log(` Example: ${print(firstAlgorithm(...example))}`);
    console.log(` Result: ${print(firstAlgorithm(...input))}`);
  }

  if (secondAlgorithm) {
    console.log(`${number}b`);
    console.log(` Example: ${print(secondAlgorithm(...example))}`);
    console.log(` Result: ${print(secondAlgorithm(...input))}`);
  }
};

const print = (val) => {
  if (typeof val === "object") {
    return JSON.stringify(val);
  }
  return val;
};

run();
