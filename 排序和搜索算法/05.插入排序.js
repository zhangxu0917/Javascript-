let arrayList = require('./01.数组数据')
let {
  swap,
  createNonSortedArray
} = require('./util');

/**
 * 插入排序
 * 插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了，接着，他和第二项进行比较，第一项是应该在原位还是在而一向之前呢？这样头两项就以正确排序，接着和第三项比较（他应该第一、第二还是第三项的位置呢？）以此类推。
 */

class sortArrayList extends arrayList {
  constructor() {
    super();
  }

  insertionSort() {
    let length = this.array.length;
    let j;
    let temp;

    for (let i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j>0 && array[j-1] > temp) {
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
    }
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 9);
console.log(arrayInstance.toString());
arrayInstance.insertionSort();
console.log(arrayInstance.toString());
