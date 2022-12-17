/**
 * @param {string} terminal
 */
export default (terminal) => {
  const output = terminal.split("\n").slice(1);
  const tree = {
    name: "/",
    children: [],
    parent: null,
  };
  let current = 0;
  let node = tree;

  const getChildren = () => {
    const children = [];
    while (current < output.length) {
      const line = output[current];
      const isCommand = line.startsWith("$");
      if (isCommand) {
        break;
      }
      children.push(line);
      current++;
    }
    return children;
  };

  while (current < output.length) {
    const line = output[current];
    const isCommand = line.startsWith("$");
    if (isCommand) {
      const [command, arg] = line.slice(2).split(" ");
      switch (command) {
        case "cd": {
          if (arg === "..") {
            node = node.parent;
          } else {
            node = node.children.find((child) => child.name === arg);
          }
          current++;
          break;
        }
        case "ls": {
          current++; // currently on the $ ls line, skip it
          const children = getChildren();
          node.children = children.map((text) => {
            if (text.startsWith("dir")) {
              return parseDir(text, node);
            }
            return parseFile(text, node);
          });
          break;
        }
      }
    } else {
      break;
    }
  }

  let total = 0;
  const getSizes = (node) => {
    const isFile = !node.children;
    if (isFile) return node.size;
    node.size = node.children.reduce((acc, child) => {
      return acc + getSizes(child);
    }, 0);

    if (!isFile && node.size <= 100000) {
      total += node.size;
    }
    return node.size;
  };
  getSizes(tree);

  return total;
};

const parseDir = (dirText, parent) => {
  return {
    name: dirText.slice(4),
    children: [],
    parent,
  };
};

const parseFile = (fileText, parent) => {
  const [size, name] = fileText.split(" ");
  return {
    size: parseInt(size),
    name,
    parent,
  };
};
