/* --------------------------------------------------------------------
Algorithm # 1:  FizzBuzz
_______________________________________________________________________
Description: print all numbers from 1 to num. If the number is: 
+ divisible by 3 print Fizz 
+ divisibe by 5 print Buzz
+ divisible by 3 and 5 print FizzBuzz
----------------------------------------------------------------------*/

// My solution
function fizzBuzz(num) {
  for(let i = 1; i <= num; i++){
    let print = '';
    if(i % 3 === 0) print = 'Fizz';
    if(i % 5 === 0) print += 'Buzz'
    console.log(print || i);
  }
}

// Course solution
function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}