class Sort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    let resultArray = [];
    const length = this.array.length;

    for (let i = length; i > 0; i--) {
      let element = this.array.pop();
      if (i === length) {
        resultArray.push(element);
      } else {
        for (let j = 0; j < resultArray.length; j++) {
          if (element < resultArray[j]) {
            resultArray.splice(j, 0, element);
          }
        }
      }
    }
    return resultArray;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
