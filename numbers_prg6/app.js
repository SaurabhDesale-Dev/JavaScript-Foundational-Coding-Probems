//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
const numRange = (num1, num2) => {
  if (num1 >= 50 && num1 <= 99) {
    return true;
  }
  if (num2 >= 50 && num2 <= 99) {
    return true;
  }
  return false;
};
console.log(numRange(10, 99));
