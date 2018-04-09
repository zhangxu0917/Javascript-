let Graph = require('./01.创建Graph类');
let Queue = require('./Queue');

/**
 * 广度优先搜索
 */

let {
  initializeColor,
  printNode
} = require('./util');

class SearchGraph extends Graph {
  BFS(v) {
    let color = initializeColor(this.vertices),
      queue = new Queue(),
      d = [],
      pred = [];
    queue.enqueue(v);

    for (let i = 0; i < this.vertices.length; i++) {
      d[this.vertices[i]] = 0;
      pred[this.vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
    return {
      distances: d,
      predecessors: pred
    }
  }
}

let graph = new SearchGraph();
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

let shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);