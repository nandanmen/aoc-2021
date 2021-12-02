function sonarSweep(numbers) {
  let count = 0;

  let windowStart = 0;
  let windowSum = 0;
  let previousSum = null;

  for (let windowEnd = 0; windowEnd < numbers.length; windowEnd++) {
    windowSum += numbers[windowEnd];

    if (windowEnd >= 2) {
      if (previousSum !== null && windowSum > previousSum) {
        count++;
      }

      previousSum = windowSum;
      windowSum -= numbers[windowStart];
      windowStart++;
    }
  }

  return count;
}

export default sonarSweep;
