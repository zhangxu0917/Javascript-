function BinarySearchTree() {
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null;
  let insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // 中序遍历的私有方法
  let inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  // 先序遍历的私有方法
  let preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  // 后续遍历的私有方法
  let postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key)      
    }
  };

  // 搜索最小值的私有方法
  let minNode = (node) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  // 搜索最大值的私有方法
  let maxNode = (node) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  
  // 搜索特定值的私有方法
  let searchNode = (node, key) => {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };
  
  // 找到最小的节点
  let findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  // 移除节点的私有方法
  let removeNode = (node, key) => {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  // 向树中插入一个新的值
  this.insert = (key) => {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  // 中序遍历 - 从最小到最大顺序访问所有节点，是对数进行排序的操作
  this.inOrderTraverse = (callback) => {
    inOrderTraverseNode(root, callback)
  };
  // 先序遍历 - 以优先于后代节点的书序访问每个节点，一种应用是打印一个结构化的文档
  this.preOrderTraverseNode = (callback) => {
    preOrderTraverseNode(root, callback);
  };
  // 后续遍历 - 先访问节点的后代节点，再访问节点本身。一种应用是计算目录和他的子目录中所有文件所占空间的大小
  this.postOrderTraverse = (callback) => {
    postOrderTraverseNode(root, callback);
  };
  // 搜索树中的最小值
  this.min = () => {
    return minNode(root);
  };
  // 搜索树中的最大值
  this.max = () => {
    return maxNode(root);
  };
  // 搜索一个特定的值
  this.search = (key) => {
    return searchNode(root, key);
  };
  // 移除一个节点
  this.remove = (key) => {
    root = removeNode(root, key);
  }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

let printNode = (value) => {
  console.log(value);
};

// 输出原始的树
console.log(`--------------------`);
console.log(tree.preOrderTraverseNode(printNode));

console.log(`--------------------`);
tree.postOrderTraverse(printNode);
console.log(`tree\'s min is ${tree.min()}`);
console.log(`tree\'s max is ${tree.max()}`);

// 测试搜索特定的值
console.log(`--------------------`);
console.log(tree.search(1) ? `key 1 found.` : `key 1 not found.`);
console.log(tree.search(8) ? `key 8 found.` : `key 8 not found.`);

// 测试删除值
console.log(`--------------------`);
tree.remove(15);
console.log(tree.preOrderTraverseNode(printNode));
