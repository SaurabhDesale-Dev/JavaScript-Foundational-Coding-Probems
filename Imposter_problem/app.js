//Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

function imposterFormula(i, p) {
  if (p <= 10 && i <= 3) {
    let imposterPredict = Math.round(100 * (i / p));
    return `${imposterPredict} %`;
  }
  return false;
}
console.log(imposterFormula(1, 10));
