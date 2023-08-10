"use strict";
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;

  scores.map((score) => {
    if (score < min) {
      min = score;
      minCount++;
    }
    if (score > max) {
      max = score;
      maxCount++;
    }
  });
  console.log(maxCount, minCount);
  return [maxCount, minCount];
}

// ==== TESTS ====
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]); //[2,4]
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]); //[4, 0]
