//JavaScript: Check whether a given positive number is a multiple of 3 or a multiple of 7

let checkMultiple = (num) => {
  if (num % 3 === 0 || num % 7 === 0) {
    return ` ${num} is  a multiple of 3 or 7`;
  }
  return ` ${num} is not a multiple of 3 or 7`;
};
console.log(checkMultiple(6));
