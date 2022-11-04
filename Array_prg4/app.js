//Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
const array = (arr) => arr[0] === 1 || arr[arr.length - 1] === 1;

console.log(array([5, 2, 3]));
