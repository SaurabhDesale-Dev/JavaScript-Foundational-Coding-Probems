//Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

const array = (arr) => {
  return [arr[1], arr[2], arr[0]];
};
console.log(array([1, 2, 3]));

// Upgrade later
