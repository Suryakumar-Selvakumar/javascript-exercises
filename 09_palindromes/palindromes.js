const palindromes = function (string) {
  const punctuations = [
    ".",
    "!",
    "?",
    ",",
    ";",
    ":",
    "—",
    "-",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "...",
    " ",
  ];
  let cleanedString = string
    .toLowerCase()
    .split("")
    .filter((element) => !punctuations.includes(element))
    .join("");
  reversedString = cleanedString.split("").reverse().join("");
  console.log(cleanedString);
  console.log(reversedString);
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
