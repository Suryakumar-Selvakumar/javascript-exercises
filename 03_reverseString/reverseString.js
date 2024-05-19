const reverseString = function (string) {
  let array = string.split("");
  array.reverse();
  reversedString = array.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
