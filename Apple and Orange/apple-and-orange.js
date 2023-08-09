"use strict";
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const atRange = (value, treeLocation) =>
    treeLocation + value >= s && treeLocation + value <= t;

  const applesCount = apples.filter((apple) => {
    return atRange(apple, a) ? apple : null;
  }).length;

  const orangesCount = oranges.filter((orange) => {
    return atRange(orange, b) ? orange : null;
  }).length;

  console.log(applesCount);
  console.log(orangesCount);
}

// ==== TESTS ====
countApplesAndOranges("aaabbb"); //3
countApplesAndOranges("ab"); //1
