const areaOfTriangle = (a, b, c) => {
  const s = (a + b + c) / 2;
  const areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(areaOfTriangle);
};
areaOfTriangle(5, 6, 7);
