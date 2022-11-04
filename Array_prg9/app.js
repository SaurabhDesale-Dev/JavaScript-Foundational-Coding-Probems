//Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.
const array = (arr) => {
  let a = arr[0];
  let b = arr[1];
  if ((a === 30 && b === 30) || (a === 40 && b === 40)) {
    return true;
  }
  return false;
};
console.log(array([3, 30]));

//Can Upgrade
