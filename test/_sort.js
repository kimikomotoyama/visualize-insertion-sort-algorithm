const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should sort in correct order", () => {
    let array = new Sort([3, 1, 5]);
    expect(array.sort()).to.equal([1, 3, 5]);
  });
});
