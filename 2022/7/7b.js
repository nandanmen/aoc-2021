const FS_SIZE = 70000000;
const SPACE_REQUIRED = 30000000;

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

  const directoryMap = {};

  const getSizes = (node) => {
    const isFile = !node.children;
    if (isFile) return node.size;
    node.size = node.children.reduce((acc, child) => {
      return acc + getSizes(child);
    }, 0);

    if (!isFile) {
      directoryMap[node.name] = node.size;
    }
    return node.size;
  };
  getSizes(tree);

  const spaceAvailable = FS_SIZE - tree.size;
  const minDirectorySize = SPACE_REQUIRED - spaceAvailable;

  let size = Number.POSITIVE_INFINITY;
  for (const dirSize of Object.values(directoryMap)) {
    if (dirSize >= minDirectorySize) {
      size = Math.min(size, dirSize);
    }
  }
  return size;
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
