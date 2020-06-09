# Queue

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/QUEUE.png?raw=true" width="500">

## Description

Queues are FIFO (First in first out) data structures. There's more than one way to implement a Stack, for example, using javascript arrays with **shift** and **push** or creating our own Linked List. The way we work with a Linked List is by adding at the end of the list and removing at the beggining to preserve the constant time O(1) on each operation. So for this structure our enqueue and dequeue are going to be more like the usual unshift and push (notice that this wouldn't be necessary if we use a DLL instead of a SLL).

Real life example:
```
Background tasks
Uploading resources
Printing queue
```

#### Node
```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```
#### Queue
```javascript
class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  ...
}
```

## Methods

For the Queue we have just a couple of methods because we only need to push and pop in a FIFO manner.

#### enqueue - Add a new node at the end

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new Node using the value
  * If stack is empty make new node first and last
  * else, set the last next to point to new node
  * set new node as queue last
  * Increase stack size
  * Return size
</details>

```javascript
enqueue(value){
  const newNode = new Node(value);
    
  if(this.size === 0){
    this.first = newNode;
    this.last = newNode;
  } else {
    this.last.next = newNode;
    this.last = newNode;
  }
  this.size++;
  return this.size;
}
```

#### dequeue - Remove the node at the beggining

<details>
  <summary>See logic</summary>
  
  * If the queue is empty return null
  * Save the current first in a variable
  * If the length is 1 set last to null
  * set current first next to be the first
  * Set the last prev node next to null
  * set current first next to null
  * Decrement queue length
  * Return the value of the node removed
</details>

```javascript
dequeue() {
  if(this.size === 0) return null
  const removedNode = this.first;
  if(this.size === 1) {
    this.last = null;
  } 
  this.first = removedNode.next;
  removedNode.next = null;
  this.size--;
  return removedNode.val;
}
```

#### print - Helper to print the queue in a legible way (console)
```javascript
print() {
  let currentNode = this.head;
  let result = '';

  while(currentNode) {
    result += `(${currentNode.val})${currentNode.next? ' <- ' : ''}`
    currentNode = currentNode.next;
  }
  console.log(result)
}
```

## Big O

* Insertion - O(1)
* Removal - O(1)