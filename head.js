
// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

function head(arr) {
  if (arr === []) {
    return undefined;
  } else {
    return arr[0];
  }
}

module.exports = head;