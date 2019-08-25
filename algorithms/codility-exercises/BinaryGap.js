/*
Binary Gap

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should
return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation
10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0,
because N has binary representation '100000' and thus no binary gaps.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).
*/

/*-------------------------------------------
Solution Score: 100%
--------------------------------------------*/

function solution(N) {
  let largestGap = 0;
  let currentGap = 0;
  const binaryRepresentation = parseInt(N, 10).toString(2);
  
  for (let i = 0; i < binaryRepresentation.length; i++) {      
    if (+binaryRepresentation[i] === 0) {
      currentGap++;
    } else {
      largestGap = largestGap >= currentGap ? largestGap : currentGap;
      currentGap = 0;
    }      
  }
  return largestGap;
}