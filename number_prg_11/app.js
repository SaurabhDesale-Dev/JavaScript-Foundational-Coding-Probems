//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

const computation = (num1, num2) => {
  let subDiff = Math.abs(num1 - num2);

  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || subDiff === 8) {
    return true;
  }
  return false;
};
console.log(computation(32, 24));
