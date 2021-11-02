const countLetter = function(string) {
  const result = {};
  for (const letter of string) {
    if (letter === " "){
    } else if (letter) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}

module.exports = countLetter;