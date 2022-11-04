//Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
const computation = (num1, num2) => {
  let sum = num1 + num2;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
};
console.log(computation(90, 20));
