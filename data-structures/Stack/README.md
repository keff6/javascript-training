# Stack

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/STACK.png?raw=true" width="500">

## Description

Stacks are LIFO (Last in first out) data structures. There's more than one way to implement a Stack, for example, using javascript arrays with **push** and **pop** (it also can be achieved using **shift** and **unshift** but bear in mind that all items to the right have to be re-indexed each time affecting Big O) or creating our own Linked List. The way we work with a Linked List is by adding and removing at the beggining of the list to preserve the constant time O(1) on each movement. So for this structure our push and pop are going to be more like the usual unshift and shift (notice that this wouldn't be necessary if we use a DLL instead of a SLL).

Real life example:
```
Javascript call stack
Undo / Redo functionlaity (like photoshop)
React routing uses stacks for the history
```

## Methods

For the Stack we have just a couple of methods because we only need to push and pop in a LIFO manner.

#### push - Add a new node at the beggining

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new Node using the value
  * If stack is empty make new node first and last
  * else, point the new node next to the current first
  * set the new node as the new first
  * Increase stack size
  * Return size
</details>

```javascript
push(value){=
  const newNode = new Node(value);
  
  if(this.size === 0){
    this.first = newNode;
    this.last = newNode;
  } else {
    newNode.next = this.first;
    this.first = newNode;
  }
  this.size++;
  return this.size;
}
```

#### pop - Remove the last node 

<details>
  <summary>See logic</summary>
  
  * If the list is empty return null
  * Save the current first in a variable
  * If the length is 1 set last to null
  * set current first next to be the first
  * Set the tail prev node next to null
  * set current first next to null
  * Decrement list length
  * Return the value of the node removed
</details>

```javascript
pop() {
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

#### print - Helper to print the stack in a legible way (console)
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