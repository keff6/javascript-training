class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  
  addVertex(vertex) {
    if(!this.adjacencyList.hasOwnProperty(vertex)) this.adjacencyList[vertex] = [];
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(e => e !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(e => e !== vertex1);
  }
  
  removeVertex(vertex) {
    for(let vert of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, vert)
    }
    delete this.adjacencyList[vertex]
  }

  DFS_recursive(vertex) {
    // List to store the end result
    const result = [];
    // object to store visited vertices
    const visited = {};

    // helper recursive fucntion
    const DFS = (vtx) => {
      // return if vertex is empty
      if (!vtx) return null;
      // place the vertex into visits and result
      result.push(vtx);
      visited[vtx] = true;
      // loop the adjacency list for that vertex
      for(let v of this.adjacencyList[vtx]) {
        if(!visits.hasOwnProperty(v)) {
          DFS(v);
        }
      }
    }

    //invoke helper function with starting vertex
    DFS(vertex);
    // return results array
    return result;
  }

  DFS_iterative(vertex) {
    // create a stack to keep track of vertices and add the starting vertex
    const vTracker = [vertex];
    // create a list to store the end result
    const result = [];
    // create an object to store visited vertices
    const visited = {};
    let currentVtx;

    // mark the first vertex as visited
    visited[vertex] = true;

    // while the stack has something in it
    while(vTracker.length > 0) {
      // pop the next vertex from the stack
      currentVtx = vTracker.pop();
      // add to result list
      result.push(currentVtx);
      
      // visit all the curren vertex neighbors
      this.adjacencyList[currentVtx].forEach(neighbor => {
        // if hasnt been visited marked as visited
        if(!visited.hasOwnProperty(neighbor)) {
          visited[neighbor] = true;
          // add the non visited neighbor to the stack
          vTracker.push(neighbor);
        }
      })
    }
    // return result
    return result;
  }
}

const y = new Graph();

y.addVertex('LA')
y.addVertex('Dallas')
y.addVertex('Mendocino')
y.addEdge('Mendocino', 'LA')
y.addEdge('Mendocino', 'Dallas')
y.removeVertex('Mendocino')

console.log(y)