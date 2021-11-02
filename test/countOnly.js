const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#countOnly", () => {
  it("returns 1 === 1 for 'Jason'", () => {
    assert.strictEqual(assertEqual(result1["Jason"], 1));
  });
  it("returns 'undefined' for result1['Karima']", () => {
    assert.strictEqual(assertEqual(result1["Karima"], undefined)); 
  });
  it("returns 2 === 2 for 'Fang'", () => {
    assert.strictEqual(assertEqual(result1["Fang"], 2));
  });
  it("returns 'undefined' for result1['Agouhanna']", () => {
    assert.strictEqual(assertEqual(result1["Agouhanna"], undefined)); 
  });
});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
