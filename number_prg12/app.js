//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

const number = (a, b, c) => {
  if (a === b && a === c) {
    return 30;
  } else if (a === b || a === c || b === c) {
    return 40;
  }
  return 20;
};
console.log(number(4, 4, 4));
