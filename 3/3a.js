export default (...report) => {
  const bitLength = report[0].length;
  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < bitLength; i++) {
    const mostCommon = getCommonBits(report, i);
    gammaRate += mostCommon;
    epsilonRate += mostCommon === "1" ? "0" : "1";
  }

  gammaRate = parseInt(gammaRate, 2);
  epsilonRate = parseInt(epsilonRate, 2);
  return gammaRate * epsilonRate;
};

function getCommonBits(report, index) {
  let oneCount = 0;
  let zeroCount = 0;

  for (const number of report) {
    const bit = number[index];
    if (bit === "1") {
      oneCount++;
    } else {
      zeroCount++;
    }
  }

  // I'm assuming 0 is returned if it's a tie
  return oneCount > zeroCount ? "1" : "0";
}
