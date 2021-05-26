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

const obj = new WeightedGraph();

obj.addVertex('A');
obj.addVertex('B');
obj.addVertex('C');
obj.addVertex('D');
obj.addVertex('E');
obj.addVertex('F');
obj.addEdge('A', 'B', 4);
obj.addEdge('A', 'C', 2);
obj.addEdge('B', 'E', 3);
obj.addEdge('C', 'D', 2);
obj.addEdge('C', 'F', 4);
obj.addEdge('D', 'E', 3);
obj.addEdge('D', 'F', 1);
obj.addEdge('F', 'E', 1);

console.log('---- Result ----')
console.log(obj.shortestPathDijkstra('A','E'))