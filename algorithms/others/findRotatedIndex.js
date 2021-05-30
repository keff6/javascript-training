function findRotatedIndex(arr, n) {
  if(arr.length < 1) return -1
  let foundIndex = -1;

  // function to find pivot index
  const findPivot = (start, end) => {
    if(start >= end) return -1
    const mid = start + parseInt((end-start) / 2)
    if(arr[mid] > arr[mid + 1]) return mid + 1
    if(arr[start] < arr[mid]) return findPivot(mid + 1, end)
    return findPivot(start, mid)
  }

  // function to find the n value
  const binarySearch = (start, end) => {
    if(start > end) return -1;
    const mid = start + parseInt((end-start) / 2)
    if(arr[mid] === n) return mid
    if(arr[mid] < n) return binarySearch(mid + 1, end)
    return binarySearch(start, mid - 1)
  }
  
  const pivot = findPivot(0, arr.length - 1)
  console.log(pivot)
  let endSearchIdx = arr.length - 1;
  
  if(arr[pivot] <= n && arr[endSearchIdx] >= n) {
    foundIndex = binarySearch(pivot, endSearchIdx)
  } else {
    foundIndex = binarySearch(0, pivot - 1);
  }

  return foundIndex
}

console.log(findRotatedIndex([10,11,12,13,14,15,16,3,5,7,9], 16)) 