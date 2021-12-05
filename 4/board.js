export class Board {
  constructor(rows) {
    this.rows = rows;
    this.marked = new Set();
  }

  /**
   * Marks a given number.
   * @param {number} number
   */
  mark(number) {
    this.marked.add(number);
  }

  /**
   * Returns true if the board has a winning condition, that is if
   * all the numbers in a row or column are marked.
   * @returns {boolean}
   */
  won() {
    // Check columns for win condition
    for (let col = 0; col < this.columnSize; col++) {
      const colNumbers = [];
      for (const row of this.rows) {
        colNumbers.push(row[col]);
      }
      if (this.allMarked(colNumbers)) {
        return true;
      }
    }

    // Check rows for win condition
    for (const row of this.rows) {
      if (this.allMarked(row)) {
        return true;
      }
    }

    // Neither columns nor rows has a win condition
    return false;
  }

  /**
   * Returns the sum of all unmarked numbers in the board.
   * @returns {number}
   */
  score() {
    let score = 0;

    for (const row of this.rows) {
      for (const number of row) {
        if (!this.marked.has(number)) {
          score += number;
        }
      }
    }

    return score;
  }

  allMarked(numbers) {
    return numbers.every((number) => this.marked.has(number));
  }

  get columnSize() {
    return this.rows.length;
  }

  get rowSize() {
    return this.rows[0].length;
  }
}
