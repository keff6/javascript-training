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
    while(current) {
      const nextNode = current.next
      if(!nextNode.next) { // if it is the tail
        current.next = null
        this.tail = current;
        this.length--;
        return nextNode;
      }
      current = nextNode
    }
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