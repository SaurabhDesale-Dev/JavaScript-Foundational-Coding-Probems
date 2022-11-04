const test = ['aaa', 'bbbbb', 'saurabhdesale'];
let longestStringLength = test[0].length;
let longestString = test[0];
for (i = 0; i < test.length; i++) {
  if (test[i].length > longestStringLength) {
    longestStringLength = test[i].length;
    longestString = test[i];
  }
}
console.log(longestString);
