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

console.log(assertArraysEqual([1,2,3], [1,2,3]));
console.log(assertArraysEqual([1,2,3,4], [1,2,3]));
console.log(assertArraysEqual(["1",2,3], [1,2,3]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));