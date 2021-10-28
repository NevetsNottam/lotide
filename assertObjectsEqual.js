// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Length = Object.keys(object1);
  let obj2Length = Object.keys(object2);

  if (obj1Length.length !== obj2Length.length) {
    return false;
  }

  for (let keys of obj1Length) {// obj1Length = [a,b]   obj2Length2 = [b,a]  -> object1["a"] ===
    // Check if the key will contain the array value
    if (Array.isArray(object1[keys])) {
      // Use eqArray here
      return eqArrays(object1[keys], object2[keys]);
    } else {
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${inspect(actual)} is exactly the same as ${inspect(expected)}`);
  } else {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${inspect(actual)} is not the same as ${inspect(expected)}`);
  }
};


console.log(assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'}));
