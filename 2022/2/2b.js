/**
 * A -> Rock
 * B -> Paper
 * C -> Scissors
 */

const victoryMap = {
  A: "B",
  B: "C",
  C: "A",
};

const loseMap = {
  A: "C",
  B: "A",
  C: "B",
};

const pointsMap = {
  A: 1,
  B: 2,
  C: 3,
};

export default (text) => {
  const games = text.split("\n");
  const points = games.reduce((acc, game) => {
    const [elf, you] = game.split(" ");

    let play;
    let outcomePoints;
    if (you === "X") {
      outcomePoints = 0;
      play = loseMap[elf];
    } else if (you === "Y") {
      outcomePoints = 3;
      play = elf;
    } else {
      outcomePoints = 6;
      play = victoryMap[elf];
    }

    return acc + outcomePoints + pointsMap[play];
  }, 0);

  return points;
};
