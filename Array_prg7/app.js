//Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
const array = (arr) => {
  if (arr.length === 2) {
    if (arr[0] === 1 || arr[0] === 3 || arr[0] === 3 || arr[1] === 3) {
      return true;
    }
  }
  return false;
};
console.log(array([1, 3]));
