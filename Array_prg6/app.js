//Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3
const middleEl = (a, v) => {
  if (a.length === 3 && v.length === 3) {
    let midValArr = [];
    midValArr.push(a[1], v[1]);
    return midValArr;
  }
  return arr;
};
console.log(middleEl([1, 2, 3], [5, 4, 8]));
