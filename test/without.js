const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('returns ["1", "2"] for [1, 2, "3"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual(words, ["hello", "world", "lighthouse"], "lighthouse"));
  });
});

const words = ["hello", "world", "lighthouse"];
/*
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/