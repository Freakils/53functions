var helloList = require("../hello-list");
var assert = require("assert");

describe("takes a number as parameter  and returns a list of hello world entries equal to the number supplied", function() {
  it("should return a list of 'hello world' equal to the number supplied", function() {
    assert.deepEqual(helloList(2), ["hello world", "hello world"]);
  });
});
