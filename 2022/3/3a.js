/**
 * each line consists of items in a bag
 * each bag has two compartments, so the item list must be divided into two
 * there is at most one item that is common to both compartments
 * the priority of the item is its ascii code
 *    nope, the code doesn't line up perfectly; there seems to be stuff between
 *    Z and a
 */
export default (text) => {
  const bags = text.split("\n");
  return bags.reduce((sum, bag) => {
    const midpoint = bag.length / 2;
    const [first, second] = [bag.slice(0, midpoint), bag.slice(midpoint)];
    const common = [...first].find((letter) => second.includes(letter));
    return sum + getPriority(common);
  }, 0);
};

const lowercase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97)
);
const uppercase = lowercase.map((c) => c.toUpperCase());
const letters = [...lowercase, ...uppercase];

const getPriority = (letter) => {
  return letters.indexOf(letter) + 1;
};
