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