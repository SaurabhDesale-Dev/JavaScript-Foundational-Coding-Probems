function yearsInOneHouse(age, moves) {
  return Math.round(age / (moves + 1));
}
console.log(yearsInOneHouse(20, 5));
