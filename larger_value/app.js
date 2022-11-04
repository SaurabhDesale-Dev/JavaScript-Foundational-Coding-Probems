//Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
const largerVal = (arr) => {
  let largerVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largerVal) {
      largerVal = arr[i];
    }
  }
  return largerVal;
};
console.log(largerVal([1, 2, 3, 55, 87, 4, 6]));
