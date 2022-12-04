const toInterval = (text) => {
  return text.split("-").map(Number);
};

export const contains = (a, b) => {
  if (a[0] === b[0]) {
    return true;
  }
  // a overlaps b
  if (a[0] <= b[0]) {
    return a[1] >= b[1];
  }
  // here a[0] > b[0]
  return b[1] >= a[1];
};

export default (text) => {
  const pairs = text.split("\n");
  return pairs.filter((pair) => {
    const [first, second] = pair.split(",");
    return contains(toInterval(first), toInterval(second));
  }).length;
};
