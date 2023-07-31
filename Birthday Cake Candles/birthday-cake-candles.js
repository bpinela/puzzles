"use strict";
/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  const maxQuant = candles.filter((item) => item === max).length;
  console.log(maxQuant);
  return maxQuant;
}

// ==== TESTS ====
birthdayCakeCandles([3, 2, 1, 3]); //2
birthdayCakeCandles([1, 2, 1, 3]); //1
birthdayCakeCandles([3, 3, 3, 3]); //4
birthdayCakeCandles([3, 3, -12, -9]); //2
