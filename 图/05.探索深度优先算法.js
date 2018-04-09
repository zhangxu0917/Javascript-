let Graph = require('./01.创建Graph类')
let {
  initializeColor,
  printNode
} = require('./util');
/**
 * 探索深度优先算法
 */

let time = 0;
let DFSVisit = ({
  u,
  color,
  adjList,
  d,
  f,
  p
}) => {
  console.log(`discovered ${u}`);
  color[u] = 'grey';
  d[u] = ++time;
  let neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    let w = neighbors[i];
    if (color[w] === 'white') {
      p[w] = u;
      DFSVisit({
        u: w,
        color,
        adjList,
        d,
        f,
        p
      })
    }
  }
  color[u] = 'black';
  f[u] = ++time;
  console.log(`explored ${u}`);
};

class SearchGraph extends Graph {
  DFS() {
    let color = initializeColor(this.vertices),
      d = [],
      f = [],
      p = [],
      time = 0;

    for (let i = 0; i < this.vertices.length; i++) {
      f[this.vertices[i]] = 0;
      d[this.vertices[i]] = 0;
      p[this.vertices[i]] = null;
    }

    for (let i = 0; i < this.vertices.length; i++) {
      if (color[this.vertices[i]] === 'white') {
        DFSVisit({
          u: this.vertices[i],
          color,
          adjList: this.adjList,
          d,
          f,
          p
        });
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p
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

let result = graph.DFS();
console.log(result);