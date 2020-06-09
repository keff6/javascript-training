class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  enqueue(value){
    // Create a new node
    const newNode = new Node(value);
    
    // If the size of the stack is 0 set new node as first and last
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      // set the last next to point to new node
      this.last.next = newNode;
      // set new node as queue last
      this.last = newNode;
    }
    // increment size
    this.size++;
    // return size
    return this.size;
  }
  
  dequeue() {
    // if size = 0 return null
    if(this.size === 0) return null
    // save the current first element into a variable
    const removedNode = this.first;
    // if there is only one node set first and last
    if(this.size === 1) {
      this.last = null;
    } 
    // set current first next to be the fisrt
    this.first = removedNode.next;
    // set current first next to null
    removedNode.next = null;
    // decrement size
    this.size--;
    // return removed node value
    return removedNode.val;
  }
  
  print() {
    let currentNode = this.first;
  let result = '';

  while(currentNode) {
    result += `(${currentNode.val})${currentNode.next? ' <- ' : ''}`
    currentNode = currentNode.next;
  }
  console.log(result)
  }
}

// Tests
const q = new Queue()
q.enqueue(5)
q.enqueue(8)
q.enqueue(9)
q.print()
q.dequeue()
q.print()
console.log(q)