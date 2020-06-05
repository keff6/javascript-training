class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    
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