import { strict as assert } from "node:assert";

/**
 * @param {string} text
 */
export default (text) => {
  const [stackInput, commandInput] = text.split("\n\n");
  const stacks = parseStacks(stackInput);

  const commands = parseCommands(commandInput);
  commands.forEach((command) => {
    runCommand(stacks, command);
    console.log(stacks);
  });

  return stacks.map((stack) => stack.at(-1)).join("");
};

const runCommand = (stacks, { count, from, to }) => {
  const _from = stacks[from - 1];
  const stacksToMove = _from.slice(-count);
  _from.splice(-count);
  stacks[to - 1] = stacks[to - 1].concat(stacksToMove);
};

const parseCommands = (input) => {
  const lines = input.split("\n");
  const commands = lines.map((line) =>
    line
      .split(/move|from|to/)
      .slice(1)
      .map(Number)
  );
  return commands.map(([count, from, to]) => ({ count, from, to }));
};

// --

const parseStacks = (input) => {
  const lines = input.split("\n");

  const crateNum = Number(lines.at(-1).trimEnd().at(-1));
  let crates = lines.slice(0, lines.length - 1).map((line) => line.split(" "));
  crates = crates.map(normalize);

  assert(crates.every((crate) => crate.length === crateNum));
  return createStacks(crates);
};

/**
 * @param {string[]} crates
 */
const normalize = (crates) => {
  const _crates = [];

  let i = 0;
  while (i < crates.length) {
    const crate = crates[i];
    if (crate.startsWith("[")) {
      _crates.push(crate);
      if (crates[i + 1] === "") {
        i += 2;
        continue;
      }
    } else if (crates[i + 1] === "" && crates[i + 2] === "") {
      _crates.push("  ");
      i += 3;
      continue;
    }
    i++;
  }

  return _crates;
};

/**
 * @param {string[][]} crates
 * @returns {string[][]}
 */
const createStacks = (crates) => {
  const stacks = [];
  for (const index of crates[0].keys()) {
    const stack = [];

    for (let i = 0; i < crates.length; i++) {
      const _crate = crates[i][index];
      if (_crate.startsWith("[")) {
        stack.push(_crate[1]);
      }
    }

    stack.reverse();
    stacks.push(stack);
  }

  return stacks;
};
