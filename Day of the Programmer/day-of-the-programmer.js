"use strict";
/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

const julianLeapYear = (year) => {
  return year % 4 == 0;
};

const leapYear = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

function dayOfProgrammer(year) {
  if (year === 1918) {
    console.log(`26.09.${year}`);
    return `26.09.${year}`;
  }

  if (year < 1919) {
    if (julianLeapYear(year)) {
      console.log(`12.09.${year}`);

      return `12.09.${year}`;
    }
    console.log(`13.09.${year}`);
    return `13.09.${year}`;
  }

  if (leapYear(year)) {
    console.log(`12.09.${year}`);

    return `12.09.${year}`;
  }
  console.log(`13.09.${year}`);
  return `13.09.${year}`;
}

// ==== TESTS ====
dayOfProgrammer(2017); //13.09.2017
dayOfProgrammer(2016); //12.09.2016
dayOfProgrammer(1800); //12.09.1800
dayOfProgrammer(1918); //26.09.1918
dayOfProgrammer(1919); //13.09.1919
