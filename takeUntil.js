

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

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  else {
    let result = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      else {
        result = true;
      }
    }
    return result;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${arr1} is exactly the same as ${arr2}`);
  }
  else {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${arr1} is not the same as ${arr2}`);
  }
}


// test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2,]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
