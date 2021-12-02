import * as fs from "fs/promises";

const readFile = async (path) => {
  let inputStr = await fs.readFile(path);
  return inputStr.toString();
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
    firstAlgorithm = (await import(`./${number}/${number}a.js`)).default;
  }

  if (runSecondPart) {
    secondAlgorithm = (await import(`./${number}/${number}b.js`)).default;
  }

  if (!runFirstPart && !runSecondPart) {
    firstAlgorithm = (await import(`./${number}/${number}a.js`)).default;
    secondAlgorithm = (await import(`./${number}/${number}b.js`)).default;
  }

  const prepare = (await import(`./${number}/prepare.js`)).default;

  const example = prepare(await readFile(`./${number}/example.txt`));
  const input = prepare(await readFile(`./${number}/input.txt`));

  if (firstAlgorithm) {
    console.log(`${number}a`);
    console.log(` Example: ${firstAlgorithm(example)}`);
    console.log(` Result: ${firstAlgorithm(input)}`);
  }

  if (secondAlgorithm) {
    console.log(`${number}b`);
    console.log(` Example: ${secondAlgorithm(example)}`);
    console.log(` Result: ${secondAlgorithm(input)}`);
  }
};

run();
