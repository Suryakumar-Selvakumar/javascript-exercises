const getTheTitles = function (books) {
  const array = [];
  for (item of books) {
    array.push(item.title);
  }
  return array;
};

// Do not edit below this line
module.exports = getTheTitles;
