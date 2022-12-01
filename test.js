import * as fs from "fs/promises";

const readFile = async (path) => {
  let inputStr = await fs.readFile(path);
  return inputStr.toString();
};

const importDefault = async (path) => {
  return (await import(path)).default;
};

const run = async () => {
  const [year, problem] = process.argv.slice(2);
  const [problemNumber] = problem.split(/[a|b]/);
  const number = Number(problemNumber);
  const _year = Number(year);
  const basePath = `./${_year}/${number}`;

  const runFirstPart = problem.endsWith("a");
  const runSecondPart = problem.endsWith("b");

  let firstAlgorithm;
  let secondAlgorithm;

  if (runFirstPart) {
    firstAlgorithm = await importDefault(`${basePath}/${number}a.js`);
  }

  if (runSecondPart) {
    secondAlgorithm = await importDefault(`${basePath}/${number}b.js`);
  }

  if (!runFirstPart && !runSecondPart) {
    firstAlgorithm = await importDefault(`${basePath}/${number}a.js`);
    secondAlgorithm = await importDefault(`${basePath}/${number}b.js`);
  }

  const prepare = await importDefault(`${basePath}/prepare.js`);

  const exampleArgs = prepare(await readFile(`${basePath}/example.txt`));
  const inputArgs = prepare(await readFile(`${basePath}/input.txt`));

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
    return JSON.stringify(val, null, 2);
  }
  return val;
};

run();
