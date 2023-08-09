"use strict";
/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const getMultipliers = (n) => {
  let multipliers = [];
  for (let i = 1; i <= 100; i++) {
    multipliers.push(n * i);
  }
  return multipliers;
};

const getCommomElements = (arr) => {
  return arr.shift().filter((value) => {
    return arr.every((item) => {
      return item.indexOf(value) !== -1;
    });
  });
};

function getTotalX(a, b) {
  const multipliers = a.map((aItem) => {
    return getMultipliers(aItem);
  });

  const commomMultipliers = getCommomElements(multipliers);

  const allFactors = b.map((item) => {
    let factor = [];
    commomMultipliers.map((multiplier) => {
      if (item % multiplier === 0) {
        factor.push(multiplier);
      }
    });
    return factor;
  });

  const commomFactors = getCommomElements(allFactors);

  console.log(commomFactors.length);
  return commomFactors.length;
}

// ==== TESTS ====
getTotalX([2, 4], [16, 32, 96]); //3
getTotalX([3, 4], [24, 48]); //2
