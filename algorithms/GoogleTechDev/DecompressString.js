// working correctly

function decompress(str) {
  const repetitionStack = []
  const segmentStack = []
  let result = ''
  let index = 0

  while(index < str.length) {
    if (!isNaN(str[index])) {
      let count = ''
      while(!isNaN(str[index])) {
        count += str[index]
        index++
      }
      repetitionStack.push(+count)
    } else if(str[index] === '['){
      segmentStack.push(result)
      result = ''
      index++
    } else if(str[index] === ']') {
      let count = repetitionStack.pop()
      let decompressSegment = ''
      for(let i = 0; i<count; i++){
        decompressSegment += result
      }
      result = segmentStack.pop()
      result += decompressSegment
      index++
    } else {
      result += str[index]
      index++
    }
  }
  return result
}

// optimization ?

console.log(decompress('2[b]aaa'))