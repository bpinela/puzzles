"use strict";
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  ar.map((item, index) => {
    for (let i = index + 1; i <= n; i++) {
      if ((item + ar[i]) % k === 0) {
        count++;
      }
    }
  });
  console.log(count);
  return count;
}

// ==== TESTS ====
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]); //5
