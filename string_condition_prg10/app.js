//Write a JavaScript program to extract the first half of a string of even length.

const stringCondition = (str) => {
  let arrayString = str.split('');
  if (arrayString.length % 2 === 0) {
    let sliceArray = arrayString.slice(0, arrayString.length / 2);
    let finalString = sliceArray.join('');
    console.log(finalString);
  } else {
    console.log(false);
  }
};
stringCondition('JavaScript');
