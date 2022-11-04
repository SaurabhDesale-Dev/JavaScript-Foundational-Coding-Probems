// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

const animals = (chickens, cows, pigs) => {
  return chickens * 2 + cows * 4 + pigs * 4;
};
console.log(animals(2, 3, 5));
