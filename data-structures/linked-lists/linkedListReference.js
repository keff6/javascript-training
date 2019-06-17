
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



