"use strict";
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  if (s.length === 1) {
    if (m === 1 && s[0] === d) {
      console.log(1);
      return 1;
    }
  }

  let count = 0;
  s.map((item, idx) => {
    let sum = item;
    const next = idx + 1;
    for (let i = next; i <= idx + (m - 1); i++) {
      sum = sum + (s[i] || 0);
    }
    if (sum === d) {
      count++;
    }
  });

  console.log(count);
  return count;
}

// ==== TESTS ====
birthday([1, 2, 1, 3, 2], 3, 2); //2
birthday([1, 1, 1, 1, 1, 1], 3, 2); //0
birthday([4], 4, 1); //1
