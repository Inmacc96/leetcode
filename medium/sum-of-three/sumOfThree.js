var sumOfThree = function (num) {
  var x = (num - 3) / 3;
  if (Number.isInteger(x)) {
    var res = [x, x + 1, x + 2];
  } else {
    var res = [];
  }
  return res;
};
