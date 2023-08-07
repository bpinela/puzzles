"use strict";
/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

const compareArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

function anagram(s) {
  if (s.length % 2 === 1) {
    console.log(-1);
    return -1;
  }

  const partOne = Array.from(s.slice(0, s.length / 2)).sort();
  const partTwo = Array.from(s.slice(s.length / 2)).sort();

  if (compareArrays(partOne, partTwo)) {
    console.log(0);
    return 0;
  }

  partOne.map((val) => {
    const idx = partTwo.indexOf(val);
    if (idx !== -1) {
      partTwo.splice(idx, 1);
    }
  });

  console.log(partTwo.length);
  return partTwo.length;
}

// ==== TESTS ====
anagram("aaabbb"); //3
anagram("ab"); //1
anagram("abc"); //-1
anagram("mnop"); //2
anagram("xyyx"); //0
anagram("xaxbbbxx"); //1
anagram("asdfjoieufoa"); //3
anagram("fdhlvosfpafhalll"); //5
anagram("mvdalvkiopaufl"); //5
