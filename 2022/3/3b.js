export default (text) => {
  const bags = text.split("\n");

  let sum = 0;
  for (let i = 0; i < bags.length; i += 3) {
    const [first, second, third] = [bags[i], bags[i + 1], bags[i + 2]];
    const badge = [...first].find(
      (letter) => second.includes(letter) && third.includes(letter)
    );
    sum += getPriority(badge);
  }

  return sum;
};

const lowercase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97)
);
const uppercase = lowercase.map((c) => c.toUpperCase());
const letters = [...lowercase, ...uppercase];

const getPriority = (letter) => {
  return letters.indexOf(letter) + 1;
};
