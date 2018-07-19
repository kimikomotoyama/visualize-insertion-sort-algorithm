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
    let array = new Sort([3, 1, 5, 2]);
    expect(array.sort()).to.deep.equal([1, 2, 3, 5]);
  });
  it("should sort in correct order", () => {
    let array = new Sort([3, 1, 5, 2, 4]);
    expect(array.sort()).to.deep.equal([1, 2, 3, 4, 5]);
  });
  it("should sort in correct order", () => {
    let array = new Sort([7, 3, 1, 6, 5, 2, 4]);
    expect(array.sort()).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });
});
