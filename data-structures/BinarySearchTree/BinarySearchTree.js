class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  
  // Insert iterative solution
  insert(val) {
    // create new node with the value
    const newNode = new Node(val)
    // if there is no root set new node as root
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    
    let currentNode = this.root;

    while(true) {
      // if val exists return undefined - no duplicates
      if (val === currentNode.value) return undefined
      // if val is greater than parent navigate to the right
      if (val > currentNode.value) {
        if(!currentNode.right){
          // if not found a node add the new node
          currentNode.right = newNode
          return this;
        }
        currentNode = currentNode.right
      }
      // if val is less than root navigate to the left of the parent
      else {
        if(!currentNode.left){
          // if not found a node add the new node
          currentNode.left = newNode
          return this;
        }
        currentNode = currentNode.left
      }
    }
  }

  // find iterative solution
  find(val) {
    // check if there is a root, if not return null
    if(!this.root) return false;
    
    let currentNode = this.root;

    while(currentNode) {
      // if val exists return true
      if (val === currentNode.value) return currentNode
      // if val is greater than parent navigate to the right
      if (val > currentNode.value) currentNode = currentNode.right
      // if val is less than root navigate to the left of the parent
      else currentNode = currentNode.left
    }
    // if not found return false
    return false;
  }

  // Breadh first iterative
  bredthFirstTraverse() {
    if(!this.root) return [];
    
    // Create a queue to keep track of the nodes to visit
    const toSeekQueue = [];
    // Create an array to save the values to be returned at the end
    const values = [];
    let currentNode = this.root;
    // Add root to the queue
    toSeekQueue.push(currentNode)
    
    // Loop while there are nodes to visit in the queue
    while(toSeekQueue.length > 0) {
      // set current node as dequeued value
      currentNode = toSeekQueue.shift();
      // Add current node value to the results array
      values.push(currentNode.value)
      // If current node has left node enqueue it
      if(currentNode.left) toSeekQueue.push(currentNode.left)
      // If current node has right node enqueue it
      if(currentNode.right) toSeekQueue.push(currentNode.right)
    }
    // return values
    return values
  }

  depthFirstPreOrder() {
    // validate if there is no root
    if(!this.root) return [];
    
    // Create variables for the return array and the current node
    const values = [];
    let current = this.root;
    
    const traverse = (node) => {
      // push the value of the current node
      values.push(node.value)
      // traverse to the left recursively
      if(node.left) traverse(node.left)
      // traverse to the right recursively
      if(node.right) traverse(node.right)
    } 
    
    traverse(current)
    
    // return values
    return values
  }
  
  print() {}
}

// Tests
const bts = new BinarySearchTree()
bts.insert(5)
bts.insert(7)
bts.insert(10)
bts.insert(8)
bts.insert(3)
bts.insert(3)



console.log(bts)








