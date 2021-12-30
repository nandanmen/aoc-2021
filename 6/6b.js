const DAYS = 256;
const NEW_FISH_TIME = 7;
const NEW_FISH_DELAY = 2;

const cache = {};
let hits = 0;
let misses = 0;

export default (...fishes) => {
  let fishCount = 0;

  fishes.forEach((start) => {
    fishCount += getValueAfterDays(start, DAYS);
  });

  console.log("hits: ", hits);
  console.log("misses: ", misses);

  return fishCount;
};

const getValueAfterDays = (start, days) => {
  if (cache[`${start}-${days}`]) {
    hits++;
    return cache[`${start}-${days}`];
  }

  misses++;

  const fishesCreated = Math.max(Math.ceil((days - start) / NEW_FISH_TIME), 0);

  let subFishesCreated = 0;

  for (let offset = 0; offset < fishesCreated; offset++) {
    const fishLifetime = days - start - NEW_FISH_TIME * offset - 1;
    subFishesCreated += getValueAfterDays(
      NEW_FISH_TIME + NEW_FISH_DELAY - 1,
      fishLifetime
    );
  }

  const fishes = 1 + subFishesCreated;
  cache[`${start}-${days}`] = fishes;
  return fishes;
};
