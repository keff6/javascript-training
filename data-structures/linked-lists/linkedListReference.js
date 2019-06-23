
// Linked List constructor
function LinkedList(){
  // first set head and tail to null
  this.head = null;
  this.tail = null;
  
}

// Node constructor
function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}
  
// Add function addToHead
LinkedList.prototype.addToHead = function(value){
  // first create a new node
  const newNode = new Node(value, this.head, null);
  
  if(this.head) { // if thes is a previous node
    this.head.prev = newNode;
  } else {  // if no previous node and empty list
    this.tail = newNode;
  }
  
  // set new node as head
  this.head = newNode; 
}

// Add function addToTail
LinkedList.prototype.addToTail = function(value){
  // first create a new node
  const newNode = new Node(value, null, this.tail);
  
  if(this.tail) { // if thes is a previous node
    this.tail.next = newNode;
  } else {  // if no previous node and empty list
    this.head = newNode;
  }
  
  // set new node as head
  this.tail = newNode; 
}

// Add function to remove head
LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;

  let val = this.head.value;
  this.head = this.head.next;

  if(this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  return val;
}

// Add function to remove tail
LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;

  let val = this.tail.value;
  this.tail = this.tail.prev;

  if(this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return val;
}

// Search method
LinkedList.prototype.search = function(val) {
  if(!this.head) return null;

  let currentNode = this.head;

  do{
    if(currentNode.value === val) return currentNode.value;
    currentNode = currentNode.next;
  }
  while(currentNode)

  return null;
}

// indexOf method
LinkedList.prototype.indexOf = function(val) {
  let currentNode = this.head;
  const indexes = [];
  let index = 0;

  while(currentNode) {
    if(currentNode.value === val){
      indexes.push(index);
    }
    index++;
    currentNode = currentNode.next;
  }
  return indexes;
}

// testing ----------------------------------------------------------
// run 
// cd data-structures/linked-lists/ && node linkedListReference.js
const ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead(3000);
ll.addToHead(2000);
ll.addToHead(3000);
// console.log(ll.removeTail())
// ll.removeTail()

console.log(ll.indexOf(3000))
