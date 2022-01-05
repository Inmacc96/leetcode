var brokenCalc = function (startValue, target) {
  let cont = 0;
  let value = target;
  while (startValue < value) {
    if (value % 2 !== 0) {
      value += 1;
    } else {
      value /= 2;
    }
    cont += 1;
  }
  return cont + (startValue - value);
};
