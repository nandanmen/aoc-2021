module.exports = function sonarSweep(numbers) {
  let count = 0;

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    const prev = numbers[i - 1];
    if (current > prev) {
      count++;
    }
  }

  return count;
};
