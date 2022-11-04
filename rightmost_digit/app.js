//Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
const rightmostDigit = (a, b, c) => {
  let num1 = a.toString();
  let num2 = b.toString();
  let num3 = c.toString();
  num1 = num1.charAt(num1.length - 1);
  num2 = num2.charAt(num2.length - 1);
  num3 = num3.charAt(num3.length - 1);
  if (
    (num1 == num2 && num3 == num1) ||
    num1 == num2 ||
    num3 == num1 ||
    num3 == num2
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(rightmostDigit(12, 27, 36));
