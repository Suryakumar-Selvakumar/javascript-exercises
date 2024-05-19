const removeFromArray = function (array, ...removableElements) {
  const newArray = [];
  array.forEach((element) => {
    if (!removableElements.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
