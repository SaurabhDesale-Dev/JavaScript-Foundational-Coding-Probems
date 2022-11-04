//Write a JavaScript program to count the number of vowels in a given string.

const equalLetters = (str) => {
  let toLowerCase = str.toLowerCase();
  let pCounter = 0;
  let tCounter = 0;
  let strArray = toLowerCase.split('');
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === 'p') {
      pCounter++;
    } else if (strArray[i] === 't') {
      tCounter++;
    }
  }
  if (pCounter === 0 && tCounter === 0) {
    console.log(`The String does not contain any P's and T's`);
  } else if (pCounter === tCounter) {
    console.log(`String contains equal number of P's and T's`);
  } else {
    console.log(`The String does not contain equal number of P's and T's`);
  }
};
equalLetters('ppptttp');
