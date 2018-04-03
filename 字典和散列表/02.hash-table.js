/**
 * 创建散列表类 
 */
function HashTasble() {
  let table = []

  let loseloseHashCode = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  this.put = (key, value) => {
    let position = loseloseHashCode(key)
    console.log(`${position} - ${key}`)
    table[position] = value
  }

  this.remove = (key) => {
    tablee[loseloseHashCode(key)] = undefined
  }

  this.get = (key) => {
    return table[loseloseHashCode(key)]
  }
}

// 使用HashTable类
let hash = new HashTasble()
hash.put('John', '123@email.com')
hash.put('Mark', '234@email.com')
hash.put('Zane', '345@email.com')