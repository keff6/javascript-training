# Binary Tree

## Description

Trees are non-linear data structures that contains a root and child nodes.
In BST every parent node has at most two children
every node on the left of the parent node is always less that the parent, and every node on the right of the parent is greater than the parent.


#### BST Traverse
There are many ways to traverse and get the values of the nodes of a binary tree:

##### Breadth First
With breadth first algorithm we visit nodes on an horizontal way first, so we can get the node values ordered by the levels of the tree.

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/BFT.gif?raw=true" width="500">

##### Depth First
> Pre Order

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/BSTPRE.gif?raw=true" width="500">

> Post Order

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/BSTPOST.gif?raw=true" width="500">

> In Order

<img src="https://github.com/keff6/javascript-training/blob/master/data-structures/images/BSTIN.gif?raw=true" width="500">


Real life example:
```
HTML DOM
Network routing
Abstract syntax trees
AI (Artificial Intelligence)
Folders in Operating Systems
JSON
```

#### Node
```javascript
class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
```
#### Binary Search Tree
```javascript
class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  ...
}
```

## Methods

For the Binary Search Tree we have insertion, searching and traverse methods.

#### insert - Add a new node to the tree in order

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * Create a new Node using the value
  * If there is no root set new node as root
  * if not, Set current node to be the root
  * Loop through the tree
  * if val exists return undefined - no duplicates
  * if val is greater than parent navigate to the right
  * if val is less than root navigate to the left of the parent
  * if not found a node add the new node
  * Return tree
</details>

```javascript
insert(val) {
  const newNode = new Node(val)
  if(!this.root) {
    this.root = newNode;
    return this;
  }
  
  let currentNode = this.root;

  while(true) {
    if (val === currentNode.value) return undefined
    if (val > currentNode.value) {
      if(!currentNode.right){
        currentNode.right = newNode
        return this;
      }
      currentNode = currentNode.right
    } 
    else {
      if(!currentNode.left){
        currentNode.left = newNode
        return this;
      }
      currentNode = currentNode.left
    }
  }
}
```

#### find - traverse the tree to look for an specific node (iterative solution)

<details>
  <summary>See logic</summary>
  
  * Function should accept a value
  * check if there is a root, if not return null
  * Set current node to be the root
  * Loop through the tree while there is a valid current node
  * if val exists return true
  * if val is greater than parent navigate to the right
  * if val is less than root navigate to the left of the parent
  * if not found return false
</details>

```javascript
find(val) {
  if(!this.root) return false;
  let currentNode = this.root;

  while(currentNode) {
    if (val === currentNode.value) return currentNode
    if (val > currentNode.value) currentNode = currentNode.right
    else currentNode = currentNode.left
  }
  return false;
}
```

#### Breadh First Traverse - visit every node of the tree (iterative solution)

<details>
  <summary>See logic</summary>
  
  * check if there is a root, if not return empty array
  * Create a queue to keep track of the nodes to visit
  * Create an array to save the values to be returned at the end
  * Add root to the queue
  * Loop while there are nodes to visit in the queue
  * set current node as dequeued value
  * Add current node value to the results array
  * If current node has left node enqueue it
  * If current node has right node enqueue it
  * return values
</details>

```javascript
bredthFirstTraverse() {
  if(!this.root) return [];
  const toSeekQueue = [];
  const values = [];
  let currentNode = this.root;
  toSeekQueue.push(currentNode)
  
  while(toSeekQueue.length > 0) {
    currentNode = toSeekQueue.shift();
    values.push(currentNode.value);
    if(currentNode.left) toSeekQueue.push(currentNode.left);
    if(currentNode.right) toSeekQueue.push(currentNode.right);
  }
  return values
}
```

#### TODO:
depthFirstPreOrder
depthFirstPostOrder
depthFirstInOrder

## Big O

* Insertion - O(log n)
* Removal - O(log n)