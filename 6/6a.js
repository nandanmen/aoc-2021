const DAYS = 80;
const NEW_FISH_TIME = 6;
const NEW_FISH_DELAY = 2;

export default (...fishes) => {
  for (let i = 0; i < DAYS; i++) {
    for (const [index, fish] of fishes.entries()) {
      if (!fish) {
        fishes[index] = NEW_FISH_TIME;
        fishes.push(NEW_FISH_TIME + NEW_FISH_DELAY + 1);
      } else {
        fishes[index]--;
      }
    }
  }

  return fishes.length;
};
