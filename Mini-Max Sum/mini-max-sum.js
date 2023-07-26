"use strict";
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const maxArr = [...arr];

  // Min
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  const minSum = arr.reduce((acc, value) => {
    return acc + value;
  }, 0);

  // Max
  maxArr.splice(maxArr.indexOf(Math.min(...maxArr)), 1);
  const maxSum = maxArr.reduce((acc, value) => {
    return acc + value;
  }, 0);

  console.log(minSum, maxSum);
}

// ==== TESTS ====
miniMaxSum([1, 2, 3, 4, 5]); //10 14
miniMaxSum([1, 2, 3, 4, 4]); //10 13
miniMaxSum([7, 69, 2, 221, 8974]); //299 9271
