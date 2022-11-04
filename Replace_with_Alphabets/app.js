//JavaScript: Replace every character in a given string with the character following it in the alphabet
let a = 'abcdefghijklmnopqrstuvwxyz';
let arr = a.split('');

const stringCondition = (str) => {
  let arrayString = str.split('');
  let finalString = '';
  arrayString.forEach((e) => {
    let index = arr.indexOf(e);
    let result = arr[index + 1];
    finalString = finalString + result;
  });
  console.log(finalString.toString().toUpperCase());
};
stringCondition('python');

