export default (...lines) => {
  const horizontalOrVerticalLines = lines.filter(
    (line) => line.x1 === line.x2 || line.y1 === line.y2
  );

  let points = {};
  for (const line of horizontalOrVerticalLines) {
    for (let x = line.x1; x <= line.x2; x++) {
      for (let y = line.y1; y <= line.y2; y++) {
        const point = `${x},${y}`;
        if (points[point]) {
          points[point]++;
        } else {
          points[point] = 1;
        }
      }
    }
  }

  let count = 0;
  for (const pointCount of Object.values(points)) {
    if (pointCount > 1) {
      count++;
    }
  }
  return count;
};
