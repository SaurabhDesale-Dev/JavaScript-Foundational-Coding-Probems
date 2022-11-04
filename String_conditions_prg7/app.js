//Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
const strCondition = (str) => {
  let array = str.split('');
  if (
    array[4] === 's' &&
    array[5] === 'c' &&
    array[6] === 'r' &&
    array[7] === 'i' &&
    array[8] === 'p' &&
    array[9] === 't'
  ) {
    let sliceArray = array.slice(0, 4);
    let finalString = sliceArray.join('');
    console.log(finalString);
  } else {
    console.log(str);
  }
};
strCondition('typescript');
