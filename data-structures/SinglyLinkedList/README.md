# Singly Linked List

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/SLL.png?raw=true" width="500">

## Description

A Singly Linked List data structurel is a simple, unidirectional list formed by nodes. Each node has a value and a pointer to the next node in the list, null if it is the last one. The Singly Linked List has a head, which is the first element in the list, a tail, which is the last one and a length, which is a counter for the number of nodes contained in the list on a specific moment.
It is better to use a Singly Linked List over an array if you have to add values at the end or the beginning multiple times, since it’s easier with a list because it does’t have indexes, so if you add something at the beginning the list doesn’t have to re-index all other elements to the right.

#### Node
```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```
#### List
```javascript
class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  ...
}
```

### Singly Linked List vs Array

<table>
	<tr>
		<th>Singly Linked List</th>
		<th>Array</th>
	</tr>
	<tr>
		<td>Do not have indexes</td>
		<td>Indexed in order</td>
	</tr>
	<tr>
		<td>Connected via nodes with a next pointer</td>
		<td>Insertion and deletion can be expensive</td>
	</tr>
	<tr>
		<td>Random access is not allowed</td>
		<td>Can quickly be accessed ata a specific index</td>
	</tr>
</table>

## Methods

For the Singly Linked List we have several methods that allows us to add, remove and traverse the list. Here is the code and the logic for those methods.

#### push - Add a new node at the end

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new Node using the value
  * If list is empty make new node head and tail
  * If list not empty, point the current tail next to new node and make new node tail
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
  * Loop through the list until you reach the tail
  * Set the next property of the 2nd to last node to null
  * Set the tail to be the 2nd to last node
  * Decrement list length
  * Return the value of the node removed
</details>

```javascript
pop(){
  if(!this.head) return undefined

  let current = this.head;
  while(current) {
    const nextNode = current.next
    if(!nextNode.next) { // if it is the tail
      current.next = null
      this.tail = current;
      this.length--;
      if(this.length === 0) {
        this.head =  null;
        this.tail = null;
      }
      return nextNode;
    }
    current = nextNode
  }
}
```
#### shift - Remove the first node

<details>
  <summary>See logic</summary>
  
  * If the list is empty return undefined
  * Store the current head property in a variable
  * Set the head to be the current head’s next
  * Decrement list length
  * Return the value of the node removed
</details>

```javascript
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
```
#### unShift - Add new node at the beginning

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new node using the value
  * If there is no head, empty list, set the head and tail to be the new node
  * Otherwise set the new node next to be the current head
  * Set the head to be the new node
  * Increment list length
  * Return list
</details>

```javascript
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
```
#### get - Get a node by its position on the list

<details>
  <summary>See logic</summary>
  
  * Receive the index of the node to look for
  * If index is less than zero or greater than or equal to the list length return null
  * Loop though the list until you reach the index
  * Return the node at the specific index
</details>

```javascript
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
  * Use the get method to access the node at index - 1
  * Set the next property on that node to be the new node
  * Set the next property on the new node to be the previous next
  * Increment list length
  * Return true
</details>

```javascript
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
```
#### remove - Remove node at determined position

<details>
  <summary>See logic</summary>
  
  * Receive the index to remove the node
  * If index < 0 or > length return undefined
  * If index = length - 1  use pop
  * If index = 0 use shift
  * Use the get method to access the node at index - 1
  * Set the next property on that node to be the next of the next node
  * Decrement list length
  * Return value or node removed
</details>

```javascript
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
```
#### reverse - Reverses the list in place

<details>
  <summary>See logic</summary>
  
  * Swap the head and the tail
  * Create a variable called next
  * Create a variable called prevention
  * Create a variable called node and initialize it to the head 
  * Loop through the list
  * Set next to be the next property on whatever node is
  * Set the next proportion the node to be whatever prevents is
  * Set prep to be the value of the node variable
  * Set the node variable to be the value of the next variable
</details>

```javascript
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
```
#### print - Helper to print the list in a legible way (console)
```javascript
print() {
  let currentNode = this.head;
  let result = '';

  while(currentNode) {
    result += `(${currentNode.val})${currentNode.next? ' -> ' : ''}`
    currentNode = currentNode.next;
  }
  console.log(result)
}
```

## Big O

* Insertion - O(1)
* Removal - it depends O(1) - O(n)
* Searching - O(n)
* Access - O(n)
