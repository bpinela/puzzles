"use strict";
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  const response = grades.map((grade) => {
    const ceil = Math.ceil(grade / 5) * 5;
    const gradeDiff = ceil - grade;

    if (grade < 38 || gradeDiff >= 3) {
      return grade;
    }

    return ceil;
  });

  console.log(response);
  return response;
}

// ==== TESTS ====
gradingStudents([73, 67, 38, 33]); //[75, 67, 40, 33]
