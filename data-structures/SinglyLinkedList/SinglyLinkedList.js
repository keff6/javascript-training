/********************************************************************
Single Linked List

Each node has a value and a reference (to the next node)
Tail node (last one) has a reference to null  

Good for:
___________________________________________________________________


Bad for:
___________________________________________________________________
********************************************************************/

// Structure: 1 list contains 0..n nodes
// A node contains a value and a pinter to the next node


class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList{
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  
  push(val) {
    const newNode = new Node(val);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  pop(){
    if(!this.head) return undefined
    
    let current = this.head;
    let prev = current;
    while(current.next) {
      prev = current
      current = current.next
    }
    prev.next = null
    this.tail = prev;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    
    let current = this.head;
    this.head = current.next;
    this.length--;
    if(this.length === 0) {
          this.tail = null;
        }
    return current
  }

  unShift(val) {    
    const newNode = new Node(val);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null
    let currentPos = 0;
    let currentNode = this.head;
    
    while(currentPos !== index) { 
      currentPos++;
      currentNode = currentNode.next
    }
    return currentNode
  }

  set(index, val){
    const nodeFound = this.get(index);
    if(!nodeFound) return false;
    nodeFound.val = val;
    return true
  }

  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unShift(val)
    
    const nodePrev = this.get(index - 1);
    const newNode = new Node(val);
    newNode.next = nodePrev.next
    nodePrev.next = newNode;
    this.length++;
    
    return true;
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();
    
    const nodePrev = this.get(index - 1);
    const removed = nodePrev.next;
    nodePrev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    if(this.length <= 0) return this;
    const aux = this.head;
    this.head = this.tail;
    this.tail = aux;
    let currentNode = this.tail
    let nextNode = currentNode.next
    let prevNode = null

    
    while(currentNode){
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
      nextNode = currentNode ? currentNode.next : null
    }
    return this;
  }

  print() {
    let currentNode = this.head;
    let result = '';
    
    while(currentNode) {
      result += `(${currentNode.val})${currentNode.next? ' -> ' : ''}`
      currentNode = currentNode.next;
    }
    console.log(result)
  }
}

// Test -----------------------------------
const list = new SingleLinkedList()
list.push(2)
list.push(3)
list.push(4)


console.log(list)

const p = list.pop()

console.log(list)
console.log(p)