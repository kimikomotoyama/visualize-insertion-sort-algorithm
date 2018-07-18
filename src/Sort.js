class Sort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    let resultArray = [];

    let element = this.array.pop();
    resultArray.push(element);
    const length = this.array.length;
    let i = 0;

    while (i < length) {
      if (resultArray.length === length + 1) return resultArray;
      if (this.array.length > 0) {
        element = this.array.pop();
      }
      if (element < resultArray[i]) {
        resultArray.splice(i, 0, element);
        i = 0;
      } else {
        if (i + 1 === resultArray.length) {
          resultArray.push(element);
          i = 0;
        } else {
          i++;
        }
      }
    }
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
