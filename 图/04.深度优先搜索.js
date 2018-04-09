let Graph = require('./01.创建Graph类')

/**
 * 深度优先搜索
 * 深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。换句话说，他是先深度后广度的访问顶点
 */

let {
  initializeColor,
  printNode
} = require('./util');

let dfsVisit = (u, color, adjList, callback) => {
  color[u] = 'grey';
  if (callback) {
    callback(u);
  }
  let neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    let w = neighbors[i];
    if (color[w] === 'white') {
      dfsVisit(w, color, adjList, callback);
    }
  }
  color[u] = 'black'
};

class SearchGraph extends Graph {
  dfs(callback) {
    let color = initializeColor(this.vertices);
    for (let i = 0; i < this.vertices.length; i++) {
      if (color[this.vertices[i]] === 'white') {
        dfsVisit(this.vertices[i], color, this.adjList, callback)
      }
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

graph.dfs(printNode);