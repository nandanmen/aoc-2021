/**
 * @param {string} mapText
 */
export default (mapText) => {
  const map = mapText.split("\n").map((row) => row.split("").map(Number));

  const cols = map[0].length;
  const rows = map.length;
  let visible = cols * 2 + rows * 2 - 4;

  const isVisibleFrom = (step, tree) => {
    const { x: xStep, y: yStep } = step;
    const { x, y } = tree;

    const _tree = map[y][x];
    for (
      let _x = x + xStep, _y = y + yStep;
      _x >= 0 && _x < cols && _y >= 0 && _y < rows;
      _x += xStep, _y += yStep
    ) {
      if (map[_y][_x] >= _tree) {
        return false;
      }
    }
    return true;
  };

  for (const [y, row] of map.entries()) {
    if (y === 0 || y === rows - 1) {
      continue;
    }
    for (const x of row.keys()) {
      if (x === 0 || x === cols - 1) {
        continue;
      }

      const fromLeft = isVisibleFrom({ x: -1, y: 0 }, { x, y });
      const fromTop = isVisibleFrom({ x: 0, y: -1 }, { x, y });
      const fromRight = isVisibleFrom({ x: 1, y: 0 }, { x, y });
      const fromBottom = isVisibleFrom({ x: 0, y: 1 }, { x, y });
      if (fromLeft || fromTop || fromRight || fromBottom) {
        visible++;
      }
    }
  }

  return visible;
};
