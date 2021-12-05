import { Board } from "./board";

/**
 * @param {string} file
 */
export default (file) => {
  const lines = file.trim().split(/\r?\n/);

  const numbers = lines[0].split(",").map(Number);
  const boards = [];

  let current = 1;
  while (current < lines.length) {
    const line = lines[current];
    if (!line.length) {
      current++;
    } else {
      boards.push(parseBoard());
    }
  }

  return [numbers, boards];
};
