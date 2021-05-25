class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  
  addVertex(vertex) {
    if(!this.adjacencyList.hasOwnProperty(vertex)) this.adjacencyList[vertex] = [];
  }
  
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const y = new WeightedGraph();

y.addVertex('A')
y.addVertex('B')
y.addVertex('C')
y.addVertex('D')
y.addVertex('E')
y.addVertex('F')
y.addEdge('A', 'B', 4)
y.addEdge('A', 'C', 2)
y.addEdge('B', 'E', 3)
y.addEdge('C', 'D', 2)
y.addEdge('C', 'F', 4)
y.addEdge('D', 'E', 3)
y.addEdge('D', 'F', 1)
y.addEdge('F', 'E', 1)

console.log(y)