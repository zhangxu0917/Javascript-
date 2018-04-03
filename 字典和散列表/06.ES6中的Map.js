let map = new Map();

map.set('Gandalf', 'Gandalf@email.com');
map.set('John', 'John@email.com');
map.set('Tyrion', 'Tyrion@email.com');

console.log(map.has('Gandalf'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());

map.delete('John');
console.log(map.size);