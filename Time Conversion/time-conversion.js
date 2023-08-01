"use strict";
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const hour = Number(s.slice(0, 2));

  if (s.includes("PM")) {
    if (hour === 12) {
      console.log(s.slice(0, 8));
      return s.slice(0, 8);
    }

    const formattedHour = hour + 12;
    console.log(formattedHour + s.slice(2, 8));
    return formattedHour + s.slice(2, 8);
  }

  if (hour === 12) {
    const formattedHour = hour - 12;
    console.log(formattedHour.toString().padStart(2, "0") + s.slice(2, 8));
    return formattedHour.toString().padStart(2, "0") + s.slice(2, 8);
  }

  console.log(s.slice(0, 8));

  return s.slice(0, 8);
}

// ==== TESTS ====
timeConversion("07:05:45PM"); //19:05:45
timeConversion("12:05:45AM"); //00:05:45
timeConversion("12:08:22PM"); //12:08:22
timeConversion("05:08:22AM"); //05:08:22
