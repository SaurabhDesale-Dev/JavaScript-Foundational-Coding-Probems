// Kinetic energy can be calculated with the following formula:

// KE = 1/2mv²

// m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J

function kineticEnergy(m, v) {
  let velocityPower = Math.pow(v, 2);
  let result = Math.round(m * velocityPower * 0.5);
  return result;
}
console.log(kineticEnergy(63.5, 7.35));
