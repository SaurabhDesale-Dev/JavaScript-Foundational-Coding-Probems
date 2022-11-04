//JavaScript: Remove a character at the specified position of a given string and return the new string

let removeChar = (str, index) => {
  let arrayString = str.split('');
  arrayString.splice(index, 1);
  let finalString = arrayString.join('');
  return finalString;
};
console.log(removeChar('saurabh', '5'));
