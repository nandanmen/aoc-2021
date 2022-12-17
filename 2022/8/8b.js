/**
 * @param {string} mapText
 */
export default (mapText) => {
  const map = mapText.split("\n").map((row) => row.split("").map(Number));

  const cols = map[0].length;
  const rows = map.length;

  const getScenicScore = (step, tree) => {
    const { x: xStep, y: yStep } = step;
    const { x, y } = tree;
    const _tree = map[y][x];

    let score = 0;
    for (
      let _x = x + xStep, _y = y + yStep;
      _x >= 0 && _x < cols && _y >= 0 && _y < rows;
      _x += xStep, _y += yStep
    ) {
      score++;
      if (map[_y][_x] >= _tree) {
        break;
      }
    }

    return score;
  };

  let score = 0;
  for (const [y, row] of map.entries()) {
    if (y === 0 || y === rows - 1) {
      continue;
    }
    for (const x of row.keys()) {
      if (x === 0 || x === cols - 1) {
        continue;
      }

      const fromLeft = getScenicScore({ x: -1, y: 0 }, { x, y });
      const fromTop = getScenicScore({ x: 0, y: -1 }, { x, y });
      const fromRight = getScenicScore({ x: 1, y: 0 }, { x, y });
      const fromBottom = getScenicScore({ x: 0, y: 1 }, { x, y });

      const currentScore = fromLeft * fromTop * fromRight * fromBottom;
      score = Math.max(score, currentScore);
    }
  }

  return score;
};
