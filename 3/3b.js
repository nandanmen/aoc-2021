export default (report) => {
  const bitLength = report[0].length;

  let oxygenCandidates = report;
  let co2Candidates = report;

  let oxygenGeneratorRating;
  let co2ScrubberRating;

  for (let i = 0; i < bitLength; i++) {
    // O(bitLength)
    if (!oxygenGeneratorRating) {
      let mostCommon = getCommonBits(oxygenCandidates, i);
      // there's an equal number of 1s and 0s
      if (mostCommon === null) {
        mostCommon = "1";
      }

      oxygenCandidates = oxygenCandidates.filter(
        (num) => num[i] === mostCommon
      );

      if (oxygenCandidates.length === 1) {
        oxygenGeneratorRating = oxygenCandidates[0];
      }
    }

    if (!co2ScrubberRating) {
      let mostCommonScrubber = getCommonBits(co2Candidates, i); // O(n)
      let leastCommon = mostCommonScrubber === "0" ? "1" : "0";
      co2Candidates = co2Candidates.filter((num) => num[i] === leastCommon); // O(n)

      if (co2Candidates.length === 1) {
        co2ScrubberRating = co2Candidates[0];
      }
    }

    if (oxygenGeneratorRating && co2ScrubberRating) {
      break;
    }
  }

  oxygenGeneratorRating = parseInt(oxygenGeneratorRating, 2);
  co2ScrubberRating = parseInt(co2ScrubberRating, 2);
  return oxygenGeneratorRating * co2ScrubberRating;
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

  // return null if it's a tie
  return oneCount > zeroCount ? "1" : zeroCount > oneCount ? "0" : null;
}
