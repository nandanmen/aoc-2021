export default (file) => file.trim().split(/\r?\n/)[0].split(",").map(Number);
