let Graph = require('./01.创建Graph类');

let initializeColor = (vertices) => {
  let color = [];
  for (const iterator of vertices) {
    console.log(iterator);
  }
  return color;
};

class SearchGraph extends Graph {
  bfs(v, callback) {
    let color = initializeColor(this.vertices);
  }
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVerties(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.bfs();