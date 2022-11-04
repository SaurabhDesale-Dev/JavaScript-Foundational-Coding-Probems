//Write a program to find if a number is divisible by 2 and 3

const divisible = (num) => {
  if (num % 2 === 0 && num % 3 === 0) {
    return `The ${num} is divisible by 2 and 3`;
  }
  return `The ${num} is not divisible by 2 and 3`;
};
console.log(divisible(3));
