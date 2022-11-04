//Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

const stringCondition = (str) => {
  let strArray = str.split('');
  if (strArray.length > 3) {
    let threeStrings = strArray.slice(0, 3).join('').toLowerCase();
    let restString = strArray.slice(3, strArray.length).join('');
    let finalString = threeStrings + restString;
    console.log(finalString);
  } else {
    console.log(str.toUpperCase());
  }
};
stringCondition('sam');
