//Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas

const stringCopies = (str, n) => {
  if (n < 0) {
    return false;
  } else {
    return str.repeat(n);
  }
};

console.log(stringCopies('sd', 3));
