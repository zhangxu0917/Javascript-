let arrayList = require('./01.数组数据');
let {
  createNonSortedArray
} = require('./util');

/**
 * 顺序搜索
 */

class searchArrayList extends arrayList {
  sequentialSearch(item) {
    let length = this.array.length
    for (let i = 0; i < length; i++) {
      if (this.array[i] === item) {
        return i
      }
    }
    return -1;
  }
}

let arrayInstance = createNonSortedArray(searchArrayList, 9);
console.log(arrayInstance.toString());
let targetIndex = arrayInstance.sequentialSearch(3);
console.log(targetIndex);

