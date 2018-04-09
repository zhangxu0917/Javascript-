let initializeColor = (vertices) => {
  let color = [];
  for (const iterator of vertices) {
    color[iterator] = 'white';
  }
  return color;
};

let printNode = (value) => {
  console.log(`Visited vertex: ${value}`);
};

module.exports = {
  initializeColor,
  printNode
}