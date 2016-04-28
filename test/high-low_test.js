var highLow = require("../high-low");
var assert = require("assert");
var list = [1,2,3,4,5,6,7,8,9];

describe("takes a list of numbers as a parameter and returns the highest and lowest numbers in the list", function(){
  it("should show the lowest and highest numbers in the list", function(){
    assert.equal(highLow.high(list),9);
    assert.equal(highLow.low(list),1);
  });
});
