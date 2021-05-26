# Graph

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/Graph.PNG?raw=true" width="300">

## Description
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an unidirected graph or a set of ordered pairs for a directed graph.

It is basically a collection of nodes and connections.

- Vertex - node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - direction assigned to distanced between vertices.

## Approaches to store the data

### Adjacency List

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/AdjacencyList.png?raw=true" width="500">

### Adjacency Matrix

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/AdjacencyMatrix.png?raw=true" width="500">

## Traverse Graph Algorithms

### Deep First Traversal - Recursive
```javascript
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
```

### Deep First Traversal - Iterative
```javascript
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
```

### Breadth First Traversal
```javascript
  BFT(vertex) {
    // create a queue and place the starting vertex in it
    const queue = [vertex];
    // create an array to store nodes visited
    const visitedArr = [];
    // create an object to store nodes visited
    const visited = {};
    // mark the starting vertex as visited
    visited[vertex] = true;
    // while there is anything in the queue
    while(queue.length > 0) {
      // remove the first vertex from the queue and push it into the visited array
      const currentVtx = queue.shift();
      visitedArr.push(currentVtx);

      // loop ever each vertex in adjacency list
      this.adjacencyList[currentVtx].forEach(neighbor => {
        // if noha has not been visited yet
        if(!visited.hasOwnProperty(neighbor)){
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }
    return visitedArr;
  }
```

### Big O comparison between Matrix and List

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/GRAPH_BO.PNG?raw=true" width="500">


## Methods
```javascript
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
}
```

## Dijkstra algorithm on weighted graph
```javascript
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

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

  shortestPathDijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // build initial state
    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Number.POSITIVE_INFINITY;
        nodes.enqueue(vertex, Number.POSITIVE_INFINITY);
      }
      previous[vertex] = null;
    }

    // loop as long as there are anything on the priority queue
    while(nodes.values.length) {
      smallest = nodes.dequeue().val;

      if(smallest === finish) {
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      // Loop through each neighbor in the adjacecy list
      if(smallest || distances[smallest] !== Number.POSITIVE_INFINITY) {
        for(let neighbor of this.adjacencyList[smallest]) {
          // console.log(this.adjacencyList[smallest][neighbor])
          let nextNode = neighbor;
          // calculate new distance to neiighboring nodes
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if(candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in PriorityQueue with new priority
            nodes.enqueue(nextNode.node, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }  
}
```



