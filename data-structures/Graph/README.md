# Graph

## Description
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an unidirected graph or a set of ordered pairs for a directed graph.

It is basically a collection of nodes and connections.

- Vertex - node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - direction assigned to distanced between vertices.

## Approaches to store the data

### Adjacency Matrix

TODO: Add image

### Adjacency List

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
    // creata a queue and palce the starting vertex in it
    const queue = [vertex];
    // create an array to store nodes visited
    const visitedArr = [];
    // createa an object to store nodes visited
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

TODO: add image


TODO: Add image

## Methods

## Big O

* Insertion - O(1)
* Removal - O(1)
* Access - O(1)


