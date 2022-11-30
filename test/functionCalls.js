let assert = require("assert");
// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

describe("Mathematical Operations", function () {
  //this.timeout(500);
  let a = 10;
  let b = 5;
  it("Addition of two numbers", function () {
    //setTimeout(done, 3000);
    let res = a + b;
    assert.equal(res, 15);
  });
  it("Subtraction of two numbers", function () {
    let res = a - b;
    assert.equal(res, 5);
  });
});
