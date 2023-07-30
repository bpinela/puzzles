"use strict";
/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  const empty = " ";
  const hash = "#";

  for (let i = 1; i <= n; i++) {
    let step = "";
    step += empty.repeat(n - i);
    step += hash.repeat(i);
    console.log(step);
  }
}

// ==== TESTS ====
staircase(6);
//      #
//     ##
//    ###
//   ####
//  #####
// ######
