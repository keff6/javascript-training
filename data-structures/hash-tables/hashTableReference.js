// hash table constructor function
function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

// hash table node constructor function
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// Hash method
HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  const bucket = total % this.numBuckets;
  return bucket;
};

// Insert method
HashTable.prototype.insert = function(key, value) {
  const index = this.hash(key);

  if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  else {
    let currentNode = this.buckets[index];
    while(currentNode.next) {
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}

// Get method
HashTable.prototype.get = function(key) {
  const index = this.hash(key);
  
  if(!this.buckets[index]) return null;
  else {
    let currentNode = this.buckets[index];
    while(currentNode) {
      if(currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next
    }
    return null;
  }
}


// TESTS AREA --------------------------------
const myHT = new HashTable(30);
// console.log(myHT);
// console.log(myHT.hash('Becca'));

// Test insert
myHT.insert('Dean', 'dean@gomail.com');
myHT.insert('Megane', 'megan@gomail.com');
myHT.insert('Dane', 'dane@gomail.com');
myHT.insert('Dean', 'donut@gomail.com');
myHT.insert('Megane', 'meagn@gomail.com');
// console.log(myHT.buckets);

// Test Get
console.log(myHT.get('Dane'));

