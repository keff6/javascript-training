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

  pop(){
    // if ther is no tail return undefned
    if(!this.tail) return undefined
    // save the current tail in a variable
    const removeNode = this.tail
    // if the length is 1 set head and tail to null
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set tail as the prev node
      this.tail = removeNode.prev
      // set the tail prev node next to null
      removeNode.prev.next = null;
      // clean the removed node previous connection
      removeNode.prev = null;
    }
    // decrement
    this.length--;
    // return node
    return removeNode;
  }

  shift() {
    // check if there is a head if not return undefined
    if(!this.head) return undefined
    // set the head into a variable
    const removeNode =  this.head;
    // if length === 1 then set tail and head to null
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set head to the current head next
      this.head = removeNode.next;
      // set new head prev to null
      this.head.prev = null;
      // set remove node next to null
      removeNode.next = null;
    }
    // decrement length
    this.length--;
    // return removed node
    return removeNode;
  }

  unshift(val) {
    // creates a new node with the value
    const newNode = new Node(val)
    // if length === 0 set tail and head to be the new node    
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set new node next to current head
      newNode.next = this.head;
      // set current head prev to new node
      this.head.prev = newNode;
      // set new node as head
      this.head = newNode;
    }
    // increment 
    this.length++;
    // return list
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