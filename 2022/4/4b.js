const toInterval = (text) => {
  return text.split("-").map(Number);
};

export const overlaps = (a, b) => {
  if (a[0] === b[0]) {
    return true;
  }
  if (a[0] < b[0]) {
    return b[0] <= a[1];
  }
  return b[1] >= a[0];
};

export default (text) => {
  const pairs = text.split("\n");
  return pairs.filter((pair) => {
    const [first, second] = pair.split(",");
    return overlaps(toInterval(first), toInterval(second));
  }).length;
};
