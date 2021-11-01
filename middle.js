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


const middle = function(arr) {
  if (!arr.length || arr.length === 1 || arr.length === 2) return [];
  
  const midElm = arr.length / 2;
  if (arr.length % 2 === 1) {
    return [arr[Math.floor(midElm)]];
  } else {
    return [
      arr[midElm - 1],
      arr[midElm]
    ];
  }
}

module.exports = middle;