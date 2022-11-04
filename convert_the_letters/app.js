//Write a JavaScript program to convert the letters of a given string in alphabetical order.
const sortLetters = (str) => {
  let arrayString = str.split('');
  let result = arrayString.sort();
  return result.join('');
};
console.log(sortLetters('Exercises'));
