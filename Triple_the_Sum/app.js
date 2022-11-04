//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

const numOne = 10;
const numTwo = 10;

if (numOne === numTwo) {
  const tripleSum = (numOne + numTwo) * 3;
  console.log(tripleSum);
} else {
  const total = numOne + numTwo;
  console.log(total);
}
