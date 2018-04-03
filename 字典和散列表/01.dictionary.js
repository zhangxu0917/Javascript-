/**
 * 创建Dictionary类
 */
function Dictionary() {
  let items = {}

  this.has = (key) => {
    return Reflect.has(items, key)
  }

  this.set = (key, value) => {
    items[key] = value
  }

  this.delete = (key) => {
    if (this.has(key)) {
      Reflect.deleteProperty(items, key)
      return true
    }
    return false
  }

  this.get = (key) => {
    return this.has(key) ? items[key] : undefined
  }

  this.values = () => {
    let values = []

    for (var key in items) {
      if (this.has(key)) {
        values.push(items[key])
      }
    }
    return values
  }

  this.keys = () => {
    return Object.keys(items);
  }

  this.clear = () => {
    items = {}
  }

  this.size = () => {
    return this.keys().length
  }

  this.getItems = () => {
    return items
  }
}

let dictionary = new Dictionary()
dictionary.set('John', '123@emial.com')
dictionary.set('Zane', '456@emial.com')
dictionary.set('Mark', '789@emial.com')

console.log(dictionary.has('Zane'))
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('Zane'))

dictionary.delete('Mark')
console.log(dictionary.values())
console.log(dictionary.getItems())