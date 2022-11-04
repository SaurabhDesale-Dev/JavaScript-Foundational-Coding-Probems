//Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

const profitableGamble = (prob, prize, pay) => {
  let netProfit = prob * prize - pay;
  if (netProfit > 0) {
    return true;
  }
  return false;
};
console.log(profitableGamble(0.9, 1, 2));
