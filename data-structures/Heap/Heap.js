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
}
  
  
const m = new MaxBinaryHeap()

m.insert(2)
m.insert(6)
m.insert(82)

console.log(m)








