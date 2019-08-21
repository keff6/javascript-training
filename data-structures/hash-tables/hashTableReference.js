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

// TESTS AREA --------------------------------
const myHT = new HashTable(30);
// console.log(myHT);
console.log(myHT.hash('Becca'));
