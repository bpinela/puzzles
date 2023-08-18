"use strict";

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const disCatA = Math.abs(x - z);
  const disCatB = Math.abs(y - z);
  const result =
    disCatA < disCatB ? "Cat A" : disCatA > disCatB ? "Cat B" : "Mouse C";
  console.log(result);
}

// ==== TESTS ====
catAndMouse(1, 2, 3); //Cat B
catAndMouse(1, 3, 2); //Mouse C
