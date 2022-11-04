//Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const cityName = (cityName) => {
  let toLowerCase = cityName.toLowerCase();
  let toArray = toLowerCase.split('');
  if (
    (toArray[0] === 'l' && toArray[1] === 'o' && toArray[2] === 's') ||
    (toArray[0] === 'n' && toArray[1] === 'e' && toArray[2] === 'w')
  ) {
    return cityName;
  }
  return `:(`;
};
console.log(cityName('New Santos'));
