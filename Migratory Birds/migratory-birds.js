"use strict";
/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const uniques = arr.filter((item, index) => arr.indexOf(item) === index);
  let entry = 0;
  let commomItem = 0;

  uniques.sort().map((item) => {
    const itemEntries = arr.filter((d) => d === item).length;
    if (itemEntries > entry) {
      entry = itemEntries;
      commomItem = item;
    }
  });

  console.log(commomItem);
  return commomItem;
}

// ==== TESTS ====
migratoryBirds([1, 4, 4, 4, 5, 3]); //4
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); //3
