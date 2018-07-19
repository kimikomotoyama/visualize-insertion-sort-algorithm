class Sort {
  constructor(array) {
    this.array = array;
    this.resultArray = [];
  }

  sort() {
    while (this.array.length > 0) {
      let element = this.getNextElementToCompare();
      this.compareAndInsertInResultArray(element);
    }
    return this.resultArray;
  }

  getNextElementToCompare() {
    return this.array.pop();
  }

  compareAndInsertInResultArray(elementToCompare) {
    let found = false;
    this.resultArray.some((eachElementInResultArray, indexInResultArray) => {
      if (elementToCompare < eachElementInResultArray) {
        // insert in front of current eachElementInResultArray
        this.resultArray.splice(indexInResultArray, 0, elementToCompare);
        found = true;
        return true;
      }
    });
    //if elementToCompare isn't smaller than any other elements
    if (!found) {
      this.resultArray.push(elementToCompare);
    }
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
