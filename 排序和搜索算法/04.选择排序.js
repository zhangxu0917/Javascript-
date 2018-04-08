let arrayList = require('./01.数组数据');
let {
  swap,
  createNonSortedArray
} = require('./util');

/**
 * 选择排序
 * 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放置在第二位
 */

class sortArrayList extends arrayList {
  constructor() {
    super()
  }

  selectionSort() {
    let length = this.array.length;
    let indexMin;

    for (let i = 0; i < length-1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(this.array, i, indexMin);
      }
    }
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 9);
console.log(arrayInstance.toString());
arrayInstance.selectionSort();
console.log(arrayInstance.toString());