const sumAll = function (start, end) {
  let normalSum = 0;
  let reverseSum = 0;
  let oldStart = start;
  let oldEnd = end;
  if (!(typeof start === "number") || !(typeof end === "number")) {
    return "ERROR";
  } else {
    for (start; start <= end; start++) {
      normalSum += start;
    }
    for (end; end <= oldStart; end++) {
      reverseSum += end;
    }
    if (normalSum < 0 || reverseSum < 0) {
      return "ERROR";
    } else {
      if (oldStart < oldEnd) {
        return normalSum;
      } else {
        return reverseSum;
      }
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
