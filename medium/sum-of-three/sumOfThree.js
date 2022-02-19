var sumOfThree = function (num) {
  var x = (num - 3) / 3;
  if (Number.isInteger(x)) {
    return [x, x + 1, x + 2];
  } else {
    return [];
  }
};
