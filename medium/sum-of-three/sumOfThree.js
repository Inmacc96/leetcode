const sumOfThree = function (num) {
  const x = (num - 3) / 3;
  return Number.isInteger(x) ? [x, x + 1, x + 2] : [];
};
