//Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

const inchesToFeet = (inches) => {
  if (inches < 12) {
    return 0;
  }
  return inches / 12;
};
console.log(inchesToFeet(70));
