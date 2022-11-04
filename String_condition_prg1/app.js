//Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
const word = (str) => {
  let start_pos = 0;
  let end_pos = str.length;
  if (str.length > 0 && str[0] === 'P') {
    start_pos = 1;
  }

  if (str.length > 0 && str[str.length - 1] === 'P') {
    end_pos--;
  }

  return str.substring(start_pos, end_pos);
};
console.log(word('Python'));
