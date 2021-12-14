import { parseLine } from "./line.js";

export default (file) => {
  const lines = file.trim().split(/\r?\n/);
  return lines.filter((line) => line.length > 0).map(parseLine);
};
