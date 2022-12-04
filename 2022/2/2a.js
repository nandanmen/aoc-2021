const pointsMap = {
  X: 1,
  Y: 2,
  Z: 3,
};

const normalizationMap = {
  A: "X",
  B: "Y",
  C: "Z",
};

const victoryMap = {
  X: "Z",
  Y: "X",
  Z: "Y",
};

const getOutcomePoints = (elf, you) => {
  const elfNormalized = normalizationMap[elf];
  if (elfNormalized === you) return 3;

  const won = victoryMap[you] === elfNormalized;
  if (won) return 6;
  return 0;
};

export default (text) => {
  const games = text.split("\n");
  const points = games.reduce((acc, game) => {
    const [elf, you] = game.split(" ");
    const outcomePoints = getOutcomePoints(elf, you);
    return acc + outcomePoints + pointsMap[you];
  }, 0);
  return points;
};
