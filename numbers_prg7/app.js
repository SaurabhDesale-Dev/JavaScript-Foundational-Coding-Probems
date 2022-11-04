//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const nearNumber = (num1, num2) => {
  let subNum1 = 100 - num1;
  let subNum2 = 100 - num2;
  if (subNum1 < subNum2) {
    console.log(`num1 is near  to 100`);
  } else if (subNum1 > subNum2) {
    console.log(`num2 is  near to 100`);
  }
};
nearNumber(99, 100);
