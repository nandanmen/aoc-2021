import { Board } from "./board.js";

/**
 * @param {number[]} numbers
 * @param {Board[]} boards
 */
export default (numbers, boards) => {
  const wonBoards = [];
  let winningNumber = null;

  for (const number of numbers) {
    for (const board of boards) {
      board.mark(number);
      if (board.won() && !wonBoards.includes(board)) {
        winningNumber = number;
        wonBoards.push(board);
      }
    }

    if (wonBoards.length === boards.length) {
      break;
    }
  }

  const lastBoard = wonBoards[wonBoards.length - 1];
  if (!lastBoard) {
    throw new Error(`No winning boards found`);
  }

  return lastBoard.score() * winningNumber;
};
