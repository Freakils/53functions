var assert = require("assert");
var reverse = require("../reverse");

describe("takes a string parameter and returns it reversed", function() {
  it("should return a reversed string", function() {
    // var result = reverse("luvo");
    assert.equal(reverse("luvo"), "ovul");
  });
});
