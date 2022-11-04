//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

const num = (a, b) => {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  }
  return false;
};

console.log(num(25, 25));
