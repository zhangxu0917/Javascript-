let arrayList = require('./01.数组数据');
let {
  swap,
  createNonSortedArray
} = require('./util');

/**
 * 堆排序
 * 堆排序也是一种很高效的算法，因其把数组当做二叉树而得名。
 */

let heapify = (array, heapSize, i) => {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, heapSize, largest);
  }
};

let buildHeap = (array) => {
  let heapSize = array.length;
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, heapSize, i);
  }
};

class sortArrayList extends arrayList {
  heapSort() {
    let heapSize = this.array.length;
    buildHeap(this.array);

    while (heapSize > 1) {
      heapSize--;
      swap(this.array, 0, heapSize);
      heapify(this.array, heapSize, 0);
    }
  }
}

let arrayInstance = createNonSortedArray(sortArrayList, 9);
console.log(arrayInstance.toString());
arrayInstance.heapSort();
console.log(arrayInstance.toString());