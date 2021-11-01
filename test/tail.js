assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns length of 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for result[0]", () => {
    assert.deepEqual(result[0], 'Lighthouse'); 
  });
  it("returns 'Labs' for result[1]", () => {
    assert.deepEqual(result[1], 'Labs'); 
  });
});



result = tail(["Hello", "Lighthouse", "Labs"]);
