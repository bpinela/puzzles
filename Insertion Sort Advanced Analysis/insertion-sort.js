"use strict";
/*
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function insertionSort(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      count++;
    }
    arr[j + 1] = currentValue;
  }
  console.log(count);
  return count;
}

// ==== TESTS ====
insertionSort([1, 1, 1, 2, 2]); //0
insertionSort([2, 1, 3, 1, 2]); //4
