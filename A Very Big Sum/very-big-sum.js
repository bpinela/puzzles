"use strict";
/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
  const sum = ar.reduce((acc, value) => {
    return acc + value;
  });
  console.log(sum);
  return sum;
}

// ==== TESTS ====
aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]); //5000000015
