const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("asserts 1-calcul.js", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
    assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
    assert.equal(calculateNumber('DIVIDE', 6.03, 2), 3);
    assert.equal(calculateNumber('DIVIDE', -1, 0), 'Error');
  });
});
