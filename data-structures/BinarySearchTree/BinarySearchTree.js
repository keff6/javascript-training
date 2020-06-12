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








