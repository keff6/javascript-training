// BinaryTree constructor
function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Insert method
BinaryTree.prototype.insert = function(value) {
  if(value <= this.value) {
    if(!this.left) this.left = new BinaryTree(value);
    else this.left.insert(value);
  } else if(value > this.value) {
    if(!this.right) this.right = new BinaryTree(value);
    else this.right.insert(value);
  }
}

// Contains method 
BinaryTree.prototype.contains = function(value) {
  if(value === this.value) return true
  else if(value < this.value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  }
  else if(value > this.value) {
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

// Depth first traversal 
BinaryTree.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if(order === 'pre-order') iteratorFunc(this.value);
  if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if(order === 'in-order') iteratorFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if(order === 'post-order') iteratorFunc(this.value);
}

// Breadth first traversal 
BinaryTree.prototype.breadthFirstTraversal = function(iteratorFunc) {
  const queue = [this];

  while(queue.length) {
    let treeNode = queue.shift();
    iteratorFunc(treeNode);

    if(treeNode.left) queue.push(treeNode.left)
    if(treeNode.right) queue.push(treeNode.right)
  }
}

// Get min value
BinaryTree.prototype.getMinVal = function() {
  if(this.left) return this.left.getMinVal();
  return this.value;
}

// Get max value
BinaryTree.prototype.getMaxVal = function() {
  if(this.right) return this.right.getMaxVal();
  return this.value;
}

// Test section -----------------------------------
// Insert
const bst = new BinaryTree(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

// console.log(bst);

// Test: Contains
// const res = bst.contains(60)
// console.log(bst.contains(10));

// Test: Depth first IN
// bst.depthFirstTraversal(log, 'in-order');

// log for depth
// function log(value) {
//   console.log(value);
// }

// log for breadth
function log(node) {
  console.log(node.value);
}

// Test: Depth first PRE
// bst.depthFirstTraversal(log, 'pre-order');

// Test: Depth first POST
// bst.depthFirstTraversal(log, 'post-order');

// Test: Breadth first traversal
// bst.breadthFirstTraversal(log);

// Test: getMinVal
console.log(bst.getMinVal())

// Test: getMinVal
console.log(bst.getMaxVal())

