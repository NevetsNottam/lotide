
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(arr) {
  if (arr === []) {
    return undefined;
  } else {
    return arr[0];
  }
}

assertEqual(head([5, 8, 0]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
