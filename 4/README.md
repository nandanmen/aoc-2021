# Day 4

Looks like the input isn't as straightforward this time:

- The first line is a comma separated string of numbers then a newline
- Then a series of boards
  - Each board is 5 x 5
  - A board is separated from another board by a newline

```
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
```

Given a series of boards and a series of numbers to draw, figure out which board will win first then return the final score of the winning board.

- The score of a winning board is the sum of all unmarked numbers on the board multiplied by the number that led to that board winning

The function signature would be:

```ts
function getWinningScore(numbers: number[], boards: number[][]): number
```

- I'm not too sure what the data type for the board should be

At a high level, the function will:

1. Iterate through each number;
2. For each number, each board will mark that number;
3. If that number led to the board winning, stop iterating and return the board's score multiplied by its number.

```ts
function getWinningScore(numbers, boards) {
  for (const number of numbers) {
    for (const board of boards) {
      board.mark(number);
      if (board.won()) {
        return board.score() * number;
      }
    }
  }
  throw new Error(`No winning boards found`);
}
```

Next we need to implement the three board methods:

1. `mark(number: number)` — marks that number in the board
2. `won(): boolean` — whether the board won or not; a board wins if all numbers in a row or column are marked
3. `score(): number` — returns the score of the board; the score of the board is the sum of all unmarked numbers

It probably makes sense to introduce a `Board` class:

```ts
class Board {
  marked: Set<number>
  rows: number[][]

  constructor(rows: number[][]) {
    this.rows = rows
    this.marked = new Set()
  }

  mark(number: number) {
    // TODO
  }

  won(): boolean {
    // TODO
  }

  score(): number {
    // TODO
  }
}
```

Improvements:

- "Cache" the score by totalling all numbers on initialization and subtracting from the score on every mark
  - This requires knowing what numbers are in the board when marking
