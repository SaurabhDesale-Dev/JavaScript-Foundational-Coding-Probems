const copies_string = (str, copies = 4) => {
    let strToArray = str.split('');
    let strLen = strToArray.length;
    if (strLen >= copies) {
      let lastTheeChar = [
        strToArray[strLen - 3],
        strToArray[strLen - 2],
        strToArray[strLen - 1],
      ];
      let charToString = lastTheeChar.join('');
      console.log(charToString.repeat(copies));
    } else return false;
  };
  
  console.log(copies_string('sau'));
  