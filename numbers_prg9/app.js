//Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
function returnNegative(n) {
  if (n < 0) {
    return n;
  }
  return 0 - n;
}
console.log(returnNegative(-1));
