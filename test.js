let assert = require("assert");
// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

describe("Mathematical Operations", function () {
  it("Addition of two numbers", function () {
    let a = 10;
    let b = 5;
    let res = a + b;
    assert.equal(res, 15);
  });
  it("Subtraction of two numbers", function () {
    let a = 10;
    let b = 5;
    let res = a - b;
    assert.equal(res, 5);
  });
});
