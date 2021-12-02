# Advent of Code 2021

Hi! This repository contains my solutions for the advent of code 2021 challenge. Each day of the challenge has its own folder. Each folder contains at least five files.

For example, for day 1 of the challenge:

- `1a.js` contains my solution for day 1 part one;
- `1b.js` contains my solution for day 1 part two;
- `example.txt` contains the example input from the problem description;
- `input.txt` contains the private input used to provide an answer;
- `prepare.js` contains the code to convert the input file to the data type the algorithms expect;

Sometimes there's a `README.md` for my notes as I complete each challenge.

To run a particular day, you can use the `node test.js <day>` command. This command reads the example file, the input file, and the algorithm files, and prints the result of running the two algorithms against the given input.

For example, running `node test.js 1` prints:

```
1a
 Example: 7
 Result: 1393
1b
 Example: 5
 Result: 1359
```

You may also run only one part by specifiying either `a` or `b` in the input:

```
$ node test.js 1a
1a
 Example: 7
 Result: 1393
```
