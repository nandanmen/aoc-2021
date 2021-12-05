import { Board } from "./board.js";

/**
 * @param {string} file
 */
export default (file) => {
  const lines = file.trim().split(/\r?\n/);

  const numbers = lines[0].split(",").map(Number);
  const boards = [];

  let current = 1;
  while (current < lines.length) {
    if (lines[current].length <= 0) {
      current++;
    } else {
      const rows = [];
      while (lines[current] && lines[current].length > 0) {
        rows.push(
          lines[current]
            .split(" ")
            .filter((numString) => numString.length > 0)
            .map((numString) => Number(numString.trim()))
        );
        current++;
      }
      boards.push(new Board(rows));
    }
  }

  return [numbers, boards];
};
