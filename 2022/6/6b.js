const NUM_UNIQUE_CHARS = 14;

export default (signal) => {
  let windowStart = 0;
  let windowEnd = NUM_UNIQUE_CHARS;

  while (windowEnd < signal.length) {
    const window = signal.slice(windowStart, windowEnd);
    const uniqueChars = new Set(window);

    if (uniqueChars.size === NUM_UNIQUE_CHARS) {
      return windowEnd;
    }

    windowStart++;
    windowEnd++;
  }

  return windowEnd;
};
