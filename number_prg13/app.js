//Write a JavaScript program to add two digits of a given positive integer of length two.
const number = (num) => {
  let numToString = num.toString();
  let str1 = numToString.charAt(0);
  let str2 = numToString.charAt(numToString.length - 1);
  let num1 = Number(str1);
  let num2 = Number(str2);
  let total = num1 + num2;
  console.log(total);
};

number(25);
