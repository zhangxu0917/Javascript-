let arrayList = require('./01.数组数据');
let {
  swap,
  createNonSortedArray
} = require('./util');

/**
 * 快速排序
 * 快速排序也许是最常用的排序算法了。且他的性能通常比其他相同复杂度的排序算法要好。和归并排序一样，快速排序也使用分治的方法，将原始数组分为较小的数组（但他没有像归并排序那样将他们分隔开）。
 */

let partition = (array, left, right) => {
  let pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
    return i;
  }
}

let quick = (array, left, right) => {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
  }

  if (left < index - 1) {
    quick(array, left, index - 1);
  }

  if (index < right) {
    quick(array, index, right);
  }
}

class sortArrayList extends arrayList {
  quickSort() {
    quick(this.array, 0, this.array.length - 1);
  }
  binarySearch(item) {
    this.quickSort();

    let low = 0,
      high = this.array.length,
      mid,
      element;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = this.array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 8);
console.log(arrayInstance.toString());
let targetIndex = arrayInstance.binarySearch(3);
console.log(targetIndex);