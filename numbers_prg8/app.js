//Write a JavaScript program to check whether the last digit of the three given positive integers is same.

let a = 24;
let numStr = a.toString();

let degitNum = (num1, num2, num3) => {
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();
  let numStr3 = num3.toString();
  if (
    numStr1.charAt(numStr1.length - 1) == 0 &&
    numStr2.charAt(numStr2.length - 1) == 0 &&
    numStr3.charAt(numStr3.length - 1) == 0
  ) {
    return true;
  }
  return false;
};

console.log(degitNum(10, 20, 32));
