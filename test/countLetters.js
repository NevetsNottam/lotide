const countLetter = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetter", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetter("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } );
  });
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(assertEqual(countLetter('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } )); 
  });
});

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
