import { Board } from "./board.js";

/**
 * @param {number[]} numbers
 * @param {Board[]} boards
 */
export default (numbers, boards) => {
  for (const number of numbers) {
    for (const board of boards) {
      board.mark(number);
      if (board.won()) {
        return board.score() * number;
      }
    }
  }
  throw new Error(`No winning boards found`);
};
