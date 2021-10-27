
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

const without = function(source, itemsToRemove) {
  let newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);