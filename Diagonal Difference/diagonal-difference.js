"use strict";
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let PrimaryDiagonalSum = 0;
  let ReverseDiagonalSum = 0;

  arr.map((subArr, index) => {
    PrimaryDiagonalSum = PrimaryDiagonalSum + subArr[index];
    ReverseDiagonalSum = ReverseDiagonalSum + subArr[subArr.length - 1 - index];
  });

  console.log(Math.abs(PrimaryDiagonalSum - ReverseDiagonalSum));
  return Math.abs(PrimaryDiagonalSum - ReverseDiagonalSum);
}

// ==== TESTS ====
diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]); //15
