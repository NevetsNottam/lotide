
const assertEqual = function(actual, expected) {
  // Create arrays of property names
  let aProps = Object.getOwnPropertyNames(actual);
  let bProps = Object.getOwnPropertyNames(expected);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${actual} !== ${expected}`);
  }

  for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (actual[propName] !== expected[propName]) {
        console.log(`🍎 🍎 🍎  Assertion Failed: ${actual} !== ${expected}`);
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  console.log(`✅ ✅ ✅  Assertion Passed:  ${actual} === ${expected}`);
}

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

console.log(countLetter("lighthouse in the house"));

console.log(assertEqual(countLetter("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}));

