//Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
const strictSoft = (a, b, c) => {
  if (a < b < c) {
    return `strict mode`;
  }
  return `soft mode`;
};
console.log(strictSoft(44, 23, 15));
