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
    const element = this.values[index];
    
    while(index > 0) {
      const parentIndex = Math.floor((index - 1)/2);
      const parent = this.values[parentIndex];
      
      if(element < parent) break;
      
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








