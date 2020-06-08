# Doubly Linked List

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/SLL.png?raw=true" width="500">

## Description
Similar to the Singly Linked List, the main difference here is that we can navigate the list also backwards (from tail to head) thanks to a property on each node named **prev** that points to the previous node the same way next points to the next node. Better than SLL in search nodes, it can do it in half the iterations, however, DLL takes more memory considering the extra pointer.

Good for:
```
Insertions at the beggining and the end
```

Bad for:
```
Random access of a determined node
```

Real life example:
```
Browser history
```

#### Node
```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
```
#### List
```javascript
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  ...
}
```

### Doubly Linked List vs Array

<table>
	<tr>
		<th>Doubly Linked List</th>
		<th>Array</th>
	</tr>
	<tr>
		<td>Do not have indexes</td>
		<td>Indexed in order</td>
	</tr>
	<tr>
		<td>Connected via nodes with a next and prev pointers</td>
		<td>Insertion and deletion can be expensive</td>
	</tr>
	<tr>
		<td>Random access is not allowed</td>
		<td>Can quickly be accessed ata a specific index</td>
	</tr>
</table>

## Methods

For the Doubly Linked List we have several methods that allows us to add, remove and traverse the list. Here is the code and the logic for those methods.

#### push - Add a new node at the end

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new Node using the value
  * If list is empty make new node head and tail
  * else, point the new node prev to the current tail
  * point the current tail next to new node and make new node tail
  * Increase list length
  * Return list
</details>

```javascript
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
```

#### pop - Remove the last node 

<details>
  <summary>See logic</summary>
  
  * If the list is empty return undefined
  * Save the current tail in a variable
  * If the length is 1 set head and tail to null
  * Set tail as the prev node
  * Set the tail prev node next to null
  * Clean the removed node previous connection
  * Decrement list length
  * Return the value of the node removed
</details>

```javascript
pop(){
  if(!this.tail) return undefined;
  const removeNode = this.tail;
  if(this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = removeNode.prev;
    removeNode.prev.next = null;
    removeNode.prev = null;
  }
  this.length--;
  return removeNode;
}
```
#### shift - Remove the first node

<details>
  <summary>See logic</summary>
  
  * Check if there is a head if not return undefined
  * Set the head into a variable
  * If length = 1 then set tail and head to null
  * Else, set head to the current head next
  * set new head prev to null
  * set remove node next to null
  * Decrement list length
  * Return the value of the node removed
</details>

```javascript
shift() {
  if(!this.head) return undefined
  const removeNode =  this.head;
  if(this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = removeNode.next;
    this.head.prev = null;
    removeNode.next = null;
  }
  this.length--;
  return removeNode;
}
```
#### unshift - Add new node at the beginning

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new node using the value
  * If there is no head, empty list, set the head and tail to be the new node
  * Otherwise set the new node next to be the current head
  * set current head prev to new node
  * Set the head to be the new node
  * Increment list length
  * Return list
</details>

```javascript
unshift(val) {
  const newNode = new Node(val)   
  if(this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.length++;
  return this;
}
```
#### get - Get a node by its position on the list

<details>
  <summary>See logic</summary>
  
  * Receive the index of the node to look for
  * If index is less than zero or greater than or equal to the list length return null
  * calculate if index is on first or second half
  * if it is in first half navigate to it from the head
  * if is on the second half navigate to it from the tail
  * Return the node at the specific index
</details>

```javascript
get(index) {
  if(index < 0 || index >= this.length) return undefined;
  let current = undefined; 
  if(index <= this.length/2) {
    current = this.head;
    for(let i = 0; i <= this.length/2; i++) {
      if(index === i) break;
      current = current.next;
    }
  } else {
    current = this.tail;
    for(let i = this.length - 1; i > this.length/2; i--) {
      if(index === i) break;
      current = current.prev;
    }
  }
  return current;
}
```
#### set - Set the value at determined position

<details>
  <summary>See logic</summary>
  
  * Receive the index and the new value
  * Use get method to get that specific node
  * If node not found return false
  * If its found set the value to the new value
  * Return true
</details>

```javascript
set(index, val){
  const nodeFound = this.get(index);
  if(!nodeFound) return false;
  nodeFound.val = val;
  return true
}
```
#### insert - Insert new node at an specific position

<details>
  <summary>See logic</summary>
  
  * Receive the index to add the new node and the value for it
  * If index < 0 or > length return false
  * If index = length push a new node
  * If index = 0 unshift a new node to the start of the list
  * create new node with the passed value
  * Use the get method to access the node at index - 1
  * set new node next to be node in index - 1 next
  * set node in index - 1 next to be new node
  * set new node next prev value to be newNode
  * set new node prev value to node in index - 1
  * Increment list length
  * Return true
</details>

```javascript
insert(index, value) {
  if(index < 0 || index > this.length) return false;
  if(index === 0) return !!this.unshift(value);
  if(index === this.length) return !!this.push(value);

  const newNode = new Node(value);
  const prevNode = this.get(index - 1)
  newNode.next = prevNode.next;
  prevNode.next = newNode;
  newNode.next.prev = newNode;
  newNode.prev = prevNode;
  this.length++;
  return true;
}
```
#### remove - Remove node at determined position

<details>
  <summary>See logic</summary>
  
  * Receive the index to remove the node
  * If index < 0 or > length return undefined
  * If index = length - 1  use pop
  * If index = 0 use shift
  * Use the get method to access the node at index
  * connect the previous node and the next related to the node to remove
  * set next and prev to null on the removed node
  * Decrement list length
  * Return value or node removed
</details>

```javascript
remove(index) {
  if(index < 0 || index >= this.length) return false;
  if(index === 0) return this.shift();
  if(index === this.length - 1) return this.pop();

  const removedNode = this.get(index);
  removedNode.prev.next = removedNode.next;
  removedNode.next.prev = removedNode.prev;
  removedNode.prev = null;
  removedNode.next = null;
  this.length--;
  return removedNode;
}
```

#### print - Helper to print the list in a legible way (console)
```javascript
print() {
  let currentNode = this.head;
  let result = '';

  while(currentNode) {
    result += `(${currentNode.val})${currentNode.next? ' <-> ' : ''}`
    currentNode = currentNode.next;
  }
  console.log(result)
}
```

## Big O

* Insertion - O(1)
* Removal - depends O(1)
* Searching - O(n)
* Access - O(n)
