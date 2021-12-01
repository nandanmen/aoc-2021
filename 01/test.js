const assert = require("assert");
const sonarSweep = require("./index");

assert.equal(sonarSweep([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]), 7);
console.log(`All tests pass ✨`);
