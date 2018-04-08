let arrayList = require('./01.数组数据');
let {
  swap,
  createNonSortedArray
} = require('./util');

/**
 * 冒泡排序
 * 他在所有排序算法中最简单。然而从运行角度来看，，冒泡排序是性能最差的一个。
 * 冒泡排序不叫任何两个相邻的项，如果第一个比第二个大，则交换他们。元素项向上移动至正确的顺序，就好像冒泡至表面一样，冒泡排序因此得名
 */

class sortArrayList extends arrayList {
  constructor() {
    super()
  }

  bubbleSort() {
    let length = this.array.length;

    for (let i = 0; i < length; i++) {
      for (let k = 0; k < length-1; k++) {
        if (this.array[k] > this.array[k+1]) {
          swap(this.array, k, k+1);
        }
      }
    }
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 9);
console.log(arrayInstance.toString());
arrayInstance.bubbleSort();
console.log(arrayInstance.toString());
