//JavaScript: Check two given integers, whether one is positive and another one is negative
const number = (num1, num2) => {
  if (num1 > 0 && num2 > 0) {
    return false;
  }
  return true;
};

console.log(number(2, -2));
