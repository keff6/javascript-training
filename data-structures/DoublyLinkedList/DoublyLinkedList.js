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

  get(index) {
    // if index < 0 or > length return undefined
    if(index < 0 || index >= this.length) return undefined;
    // calculate if index is on first or second half
    let current = undefined; 
    // if it is in first half navigate to it from the head
    if(index <= this.length/2) {
      current = this.head;
      for(let i = 0; i <= this.length/2; i++) {
        if(index === i) break;
        current = current.next;
      }
    } else {
      // if is on the seconf]d half navigate to it from the tail
      current = this.tail;
      for(let i = this.length - 1; i > this.length/2; i--) {
        if(index === i) break;
        current = current.prev;
      }
    }
    // return node or value
    return current;
  }

  set(index, value) {
    // create a variable and call get to get the node
    const foundNode = this.get(index);
    // if node is found set the val to value
    if(foundNode){ 
      foundNode.val = value;
      // return true
      return true
    }
    // else return false
    return false
  }

  insert(index, value) {
    // if index < 0 ir > this.length return false
    if(index < 0 || index > this.length) return false;
    // if index = 0 use unshift
    if(index === 0) return !!this.unshift(value);
    // if index = list lenght use push
    if(index === this.length) return !!this.push(value);
    
    // create new node with the passed value
    const newNode = new Node(value);
    // get the node in the position index - 1 using get
    const prevNode = this.get(index - 1)
    // set new node next to be node in index - 1 next
    newNode.next = prevNode.next;
    // set node in index - 1 next to be new node
    prevNode.next = newNode;
    // set new node next prev value to be newNode
    newNode.next.prev = newNode;
    // set new node prev value to node in index - 1
    newNode.prev = prevNode;
    // increase length
    this.length++;
    // return true
    return true;
  }

  remove(index) {
    // if index < 0 or >= this.length return false
    if(index < 0 || index >= this.length) return false;
    // if index = 0 use shift()
    if(index === 0) return this.shift();
    // if index = length - 1 use pop()
    if(index === this.length - 1) return this.pop();
    // use get to get the node at index position
    const removedNode = this.get(index);
    // connect the previous node and the next related to the node to remove
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    // set next and prev to null on the removed node
    removedNode.prev = null;
    removedNode.next = null;
    // decrement length
    this.length--;
    // return true
    return removedNode;
  }

  reverse() {
    // loop through the list in any direction
    let currentNode = this.head;
    while(currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode
      currentNode = nextNode
    }
    const oldTail = this.tail;
    const oldHead = this.head;
    
    this.head = oldTail;
    this.tail = oldHead;
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