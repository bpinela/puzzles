"use strict";
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const greaterThanZero = (value) => value > 0;
const lessThanZero = (value) => value < 0;
const zero = (value) => value === 0;

const calcRatio = (arr, func) => {
  return (arr.filter(func).length / arr.length).toFixed(6);
};

function plusMinus(arr) {
  console.log(calcRatio(arr, greaterThanZero));
  console.log(calcRatio(arr, lessThanZero));
  console.log(calcRatio(arr, zero));
}

// ==== TESTS ====
plusMinus([-4, 3, -9, 0, 4, 1]); //0.500000, 0.333333, 0.166667
plusMinus([1, 2, 3, -1, -2, -3, 0, 0]); //0.375000, 0.375000, 0.250000
