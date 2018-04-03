/**
 * 使用线性探索处理链表冲突：
 * 当期望向表中的某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试index+2的位置，以此类推
 */
function HashTasble() {
  let ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return `[${this.key} - ${this.value}]`;
    }
  }

  let table = [];

  let loseloseHashCode = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  this.put = (key, value) => {
    let position = loseloseHashCode(key);

    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value)
    } else {
      let index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  }

  this.remove = (key) => {
    var position = loseloseHashCode[key];

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
      } else {
        let index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          table[index] = undefined
        }
      }
    }
  };

  this.get = (key) => {
    var position = loseloseHashCode[key];

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        let index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value
        }
      }
    }
    return undefined;
  };

  this.print = () => {
    let string = '';
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        string += `${item} - ${table[item].toString()} \r\n`
      }
    }
    return string;
  };
}

// 使用HashTable类
let hash = new HashTasble();
hash.put('Gandalf', '0001@email.com');
hash.put('John', '0002@email.com');
hash.put('Tyrion', '0003@email.com');
hash.put('Aaron', '0004@email.com');
hash.put('Donnie', '0005@email.com');
hash.put('Ana', '0006@email.com');
hash.put('Jonathan', '0007@email.com');
hash.put('Jamie', '0008@email.com');
hash.put('Sue', '0009@email.com');
hash.put('Midy', '0010@email.com');
hash.put('Paul', '0011@email.com');
hash.put('Nathan', '0012@email.com');

console.log(hash.print());