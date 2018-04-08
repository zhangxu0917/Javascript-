let swap = (array, index1, index2) => {
  var aux = array[index2];
  array[index2] = array[index1];
  array[index1] = aux;
}

let createNonSortedArray = (constructor, size) => {
  let array = new constructor();
  for (let i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

module.exports = {
  swap,
  createNonSortedArray
}