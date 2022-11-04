// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

let stringCondition = (str) => {
  let arrayString = str.split('');
  let slicedArray = arrayString.slice(
    arrayString.length - 3,
    arrayString.length,
  );
  let cutString = slicedArray.join('');
  let finalString = cutString + str + cutString;
  console.log(finalString);
};
stringCondition('Swift');
