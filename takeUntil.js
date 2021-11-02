const takeUntil = function(array, callback) {
  // ...
  let taken = [];
  for (let data of array) {
    if (callback(data)){
      break;
    } else if (!callback(data)) {
        taken.push(data);
      }
    }
  return taken;
}

// create function that takes 2 parameters
// will return a slice of the array with elements taken from the beginning
// it should keep going until the callback returns a truthy value
// the callback should only be provided one value: the item in the array
// the function returns an array

module.exports = takeUntil;
