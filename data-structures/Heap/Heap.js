class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  
  insert(val) {
    // push the value into the values property
    this.values.push(val);
    // Bubble up
    this.bubbleUp();
  }
  
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1)/2);
    
    while(this.values[parentIndex] < this.values[index]) {
      // If parent is smaller than child we swap them
      const aux = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = aux;
      
      // recalculate index and parent
      index = parentIndex;
      parentIndex = Math.floor((index - 1)/2);
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
        if(leftChild < el) {
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild > el) || (swap !== null && rightChild > leftChild)){
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
    }
  }

  extractMax() {
    const len = this.values.length;
    // Swap the first value in the values with the last one
    [this.values[0], this.values[len - 1]] = [this.values[len - 1], this.values[0]];
    // Pop the max value
    const max = this.values.pop();
    // Sink down the new root to its right place
    if(len > 0) {
      this.sinkDown();
    }
    
    return max;

  }
}
  
  
const m = new MaxBinaryHeap()

m.insert(2)
m.insert(6)
m.insert(82)

console.log(m)








