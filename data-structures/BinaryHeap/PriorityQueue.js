class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}


class PriorityQueue {
  constructor() {
    this.values = []
  }
  
  enqueue(val, priority) {
    // create node
    const newNode = new Node(val, priority)
    // push the value into the values property
    this.values.push(newNode);
    // Bubble up
    this.bubbleUp();
  }
  
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    
    while(index > 0) {
      const parentIndex = Math.floor((index - 1)/2);
      const parent = this.values[parentIndex];
      
      if(element.priority >= parent.priority) break;
      
      this.values[parentIndex] = element;
      this.values[index] = parent;
      
      // recalculate index and parent
      index = parentIndex;
    }
  }

  sinkDown() {
    let idx = 0;
    const len = this.values.length;
    const el = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < el.priority) {
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild.priority > el.priority) || (swap !== null && rightChild.priority > leftChild.priority)){
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
    }
  }

  dequeue() {
    console.log('DEQUEUE')
    const len = this.values.length;
    // Swap the first value in the values with the last one
    [this.values[0], this.values[len - 1]] = [this.values[len - 1], this.values[0]];
    // Pop the max value
    const highestPriority = this.values.pop();
    // Sink down the new root to its right place
    if(len > 0) {
      this.sinkDown();
    }

    return highestPriority
  }
}
  
const ER = new PriorityQueue()

ER.enqueue('min',3)
ER.enqueue('max', 0)
ER.enqueue('mid', 2)

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())

console.log(ER)
