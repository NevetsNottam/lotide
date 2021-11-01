const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


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