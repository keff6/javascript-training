/*
Perm Missing Element

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
*/

/*-------------------------------------------
Solution Score: 100%
--------------------------------------------*/

function solution(A) {
  A.sort((a,b)=>a-b);
  
  if (A.length === 0) { // Validate empty
      return 1;
  } else if (A.length === 1) { // Validate one element
      return A[0] !== 1 ? 1 : A[0]+1;
  } else {
      if (A[0] !== 1) { return 1; }
      if (A[A.length-1] === A.length) { return A.length + 1; }
      for(let i = 0; i < A.length; i++){
          if ((A[i+1] - A[i]) !== 1) {
              return A[i] + 1;
          }
      }
  }
  return -1;
}