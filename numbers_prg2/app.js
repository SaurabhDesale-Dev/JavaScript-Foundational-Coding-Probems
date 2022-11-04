//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
const rangeNumber = (num1, num2) => {
  if (num1 >= 40 && num2 >= 40) {
    if (num1 <= 60 && num2 <= 60) {
      return `Number falls in range 40 to 60`;
    } else if (num1 >= 70 && num2 >= 70) {
      if (num1 <= 100 && num2 <= 100) {
        return `Number falls in range 70 to 100`;
      }
    }
  }
  return false;
};

console.log(rangeNumber(78, 89));
