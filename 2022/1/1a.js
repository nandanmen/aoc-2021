export default (text) => {
  const groups = text.split("\n\n");

  let maxCalories = 0;
  for (const group of groups) {
    const calories = group
      .split("\n")
      .reduce((acc, countString) => acc + Number(countString), 0);
    maxCalories = Math.max(maxCalories, calories);
  }

  return maxCalories;
};
