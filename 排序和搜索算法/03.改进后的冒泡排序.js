let arrayList = require('./01.数组数据')
let {
  swap,
  createNonSortedArray
} = require('./util');

class sortArrayList extends arrayList {
  constructor() {
    super()
  }

  modifiedBubbleSort () {
    let length = this.array.length;
    for (let i = 0; i < length; i++) {
      for (let k = 0; k < length-1-i; k++) {
        if (this.array[k] > this.array[k+1]) {
          swap(this.array, k, k+1);
        }
      }      
    }
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 9);
console.log(arrayInstance.toString());
arrayInstance.modifiedBubbleSort();
console.log(arrayInstance.toString());
