// Count number of appearances of a number using divide and conquer

function sortedFrequency(arr, n) {
  if(arr.length < 1) return -1
  let count = 0;
  let foundIndex = -1;
  // binary search recursive until n is found
  const binarySearch = (start, end) => {
    if(end < 1) return -1;

    // look for the middle
    const mid = start + parseInt((end - 1) / 2)
    // if n is on this chunk return
    if(arr[mid] === n) return mid

    // if array[mid] is less than n look on the right
    if(arr[mid] < n) return binarySearch(mid + 1, end)

    // if array[mid] is bigger than n look on the left
    return binarySearch(start, end - 1)
  }

  foundIndex = binarySearch(0, arr.length - 1);
  if(foundIndex === -1) return foundIndex;

  count++;
  // count n to the left
  let left = foundIndex - 1;
  while(arr[left] === n) {
    count++;
    left--;
  }

  // count n to the right
  let right = foundIndex + 1;
  while(arr[right] === n) {
    count++;
    right++;
  }

  // return count
  return count;
  
}

console.log(sortedFrequency([], 2)) 