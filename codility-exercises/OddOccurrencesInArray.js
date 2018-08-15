/*
Odd Occurrences In Array

Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Assume that:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/

/*-------------------------------------------
Solution Score: 100%
--------------------------------------------*/

function solution(A) {
  if (A.length === 0){
    return 0;
  }
  if (A.length === 1) {
    return A[0];
  }
  
  A.sort((a,b) => a - b);
  
  let count = 1; 
  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i-1]) {
      count++;
    } else {
      if (count % 2 !== 0) {
        return A[i-1]; 
      }
      count = 1;
    }
  }
  return A[A.length -1];
}