/**
 * 使用分离链接处理链表冲突：
 * 分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。他是解决冲突的最简单的方法。但是他在HashTable实例之外还需要额外的存储空间
 */
function HashTasble () {
  let ValuePair = function(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return `[${this.key} - ${this.value}]`;
    }
  }

  let table = [];

  let loseloseHashCode = (key) => {
    let hash = 0;
    for(let i=0; i<key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  this.put = (key, value) => {
    let position = loseloseHashCode(key)
    console.log(`${position} - ${key}`);

    if (table[position] === undefined) {
      table[position] = new LinkedList(value);
    }
    table[position].append(new ValuePair(key, value));
  }

  this.remove = (key) => {
    let position = loseloseHashCode(key)

    if (table[position] !== undefined) {
      let current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next
      }

      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  }

  this.get = (key) => {
    var position = loseloseHashCode[key];

    if (table[position] !== undefined) {
      var current = table[position].getHead();
      
      while(current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }
}

function LinkedList () {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  this.append = (element) => {
    let node = new Node(element);
    let current

    if (head === null) {
      head = node
    } else {
      current = head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
      length++;
    }
  };

  this.insert = (position, element) => {
    if (position >= 0 && position <= length) {
        let node = new Node(element);
        let current = head;
        let previous;
        let index = 0;

        if (position === 0) {
          node.next = head;
          head = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }
        length++;
        return true;
    } else {
      return false;
    }
  };

  this.removeAt = (position) => {
    if (position < -1 && position > length) {
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        head = current.next
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next
        }
        previous.next = current.next
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.remove = (element) => {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = () => {
    let current = head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = () => {
    return length === 0;
  };

  this.size = () => {
    return length;
  };

  this.getHead = () => {
    return head;
  };

  this.toString = () => {
    let current = head;
    let string = '';
    while (current) {
      string += `${current.element} ${current.next ? 'n' : ''}`;
      current = current.next;
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

console.log(hash.toString());




