//Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

const findMax = (num1, num2) => {
  if (num1 >= 40 && num1 <= 60) {
    if (num2 >= 40 && num2 <= 60) {
      if (num1 > num2) {
        return `num1 is greater than num2`;
      }
      return `num2 is greater than num1`;
    }
  }
  return false;
};

console.log(findMax(5, 45));
