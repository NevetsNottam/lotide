const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    assert.deepEqual(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]));
  });
});

const words = ["ground", "control", "to", "major", "tom"];
