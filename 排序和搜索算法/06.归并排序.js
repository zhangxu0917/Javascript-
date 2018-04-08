let arrayList = require('./01.数组数据');
let {
  swap,
  createNonSortedArray
} = require('./util');

/**
 * 归并排序
 * 归并排序是第一个可以被实际使用的排序算法，并轨排序性能不错。
 * 归并排序是一种分之算法。其思想是将原始数组切分成较小的数组。直到每个小数组只有一个位置，接着将小数组归并成较大的数组就，知道最后只有一个排序完毕的大数组
 */

let merge = (left, right) => {
  let result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  while (il < left.length) {
    result.push(left[il++]);
  }

  while (ir < right.length) {
    result.push(right[ir++]);
  }

  return result;
}

let mergeSortRec = (array) => {
  let length = array.length;
  if (length === 1) {
    return array;
  }

  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, length);

  return merge(mergeSortRec(left), mergeSortRec(right));
}

class sortArrayList extends arrayList {
  constructor() {
    super()
  }

  mergeSort() {
    this.array = mergeSortRec(this.array);
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 8);
console.log(arrayInstance.toString());
arrayInstance.mergeSort();
console.log(arrayInstance.toString());