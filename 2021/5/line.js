export function parseLine(lineStr) {
  let [start, end] = lineStr.split("->");
  [start, end] = [start.trim(), end.trim()];

  let [x1, y1] = start.split(",").map(Number);
  let [x2, y2] = end.split(",").map(Number);

  /**
   * Order the line so that x1 <= x2 and y1 <= y2
   */
  if (x2 < x1 || y2 < y1) {
    const tempX1 = x1;
    const tempY1 = y1;
    [x1, y1] = [x2, y2];
    [x2, y2] = [tempX1, tempY1];
  }

  return { x1, y1, x2, y2 };
}
