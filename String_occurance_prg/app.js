//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function stringCondition(str, o) {
  let strToArray = str.split('');
  let occurrences = [];
  for (let i = 0; i < strToArray.length; i++) {
    if (strToArray[i] === o) {
      occurrences.push(strToArray[i]);
    }
  }
  console.log(occurrences.length);
}
stringCondition('soon', 'o');
