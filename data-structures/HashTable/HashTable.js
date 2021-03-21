// HashTable class
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let pos = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const res = key[i].charCodeAt(0) - 96;
      pos = ((pos * PRIME)+ res) % this.keyMap.length;
    }
    return pos
  }

  set(key, value) {
    // Hash the key
    const pos = this._hash(key);    console.log(pos)
    // Stores the key-value pair using separate chaining
    if(!this.keyMap[pos]) this.keyMap[pos] = [];
    this.keyMap[pos].push([key, value]);
  }
  
  get(key){
    // Hashes the key
    const pos = this._hash(key);
    // retrieves key-value pair or undefined
    return this.keyMap[pos] ? this.keyMap[pos].find(i => i[0] === key) : undefined;
  }

  values() {
    let valuesArr = [];
    for(let i=0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j=0; j < this.keyMap[i].length; j++) {
          const val = this.keyMap[i][j][1];
          if(!valuesArr.includes(val)) {
            valuesArr.push(val)
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for(let i=0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j=0; j < this.keyMap[i].length; j++) {
          const val = this.keyMap[i][j][0];
          if(!keysArr.includes(val)) {
            keysArr.push(val)
          }
        }
      }
    }
    return keysArr;
  }
}



// Basic function hash O(n)
function hash(str, len) {
  let pos = 0;
  for (let c of str) {
    const res = c.charCodeAt(0) - 96;
    pos = (pos + res) % len;
  }
  return pos
}

// improved function hash
function hash(str, len) {
  let pos = 0;
  const PRIME = 31;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    const res = str[i].charCodeAt(0) - 96;
    pos = ((pos * PRIME)+ res) % len;
  }
  return pos
}


console.log(hash("test", 10))