const fibonacci = function (n) {
  n = +n;
  const array = [0, 1];
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n < 0) return "OOPS";
  for (x = 2; x <= n; x++) {
    array[x] = array[x - 1] + array[x - 2];
  }
  return array[n];
};

// Do not edit below this line
module.exports = fibonacci;
