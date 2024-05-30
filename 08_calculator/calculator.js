const add = function (...arr) {
  return arr.reduce(function (sum, item) {
    return sum + item;
  });
};

const subtract = function (...arr) {
  return arr.reduce(function (sum, item) {
    return sum - item;
  });
};

const sum = function (arr) {
  return arr.reduce(function (sum, item) {
    return sum + item;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce(function (product, item) {
    return product * item;
  }, 1);
};

const power = function (...arr) {
  return arr.reduce(function (power, item) {
    return power ** item;
  });
};

const factorial = function (...arr) {
  if (arr == 0) {
    return 1;
  }
  return arr.reduce(function (fact, item) {
    for (let i = item; i > 0; i--) {
      fact *= i;
    }
    return fact;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
