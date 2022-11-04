//JavaScript: Create a new string taking the first and last n characters from a given string

const word = (str, n) => {
  let firstN = str.substring(0, n);
  let lastN = str.substring(str.length - n);
  return firstN + lastN;
};
console.log(word('JavaScript', 2));
