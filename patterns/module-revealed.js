/*

The Revealing Module Pattern is the most famous and 
most popular of the Module Pattern variants.

Pros:
+ Rename public functions without changing function 
body.
+ Change members from public to private or vice versa by modifying a single line, without changing the function body.
+ All members, whether public or private, are defined in the closure.
+ The return object is an object literal with no function definitions. All right hand side expressions are closure variables
+ All references are via the closure variables, not the return object.

Cons:
- More to type

The differences between the Revealing Module Pattern
and the other variants of the Module Pattern is 
primarily in how public members are referenced. 
As a result, RMP is much easier to use and modify, 
which accounts for its popularity.

*/

var moduleReavealed = (function() {
  // private scaope inside the closure
  var message = 'Hello! ';

  function showMessage(message) { 
    console.log(message);
  }

  function greetMe(name = '') {
    showMessage(message + name);
  }

  return {
    // Public API
    greetMe: greetMe
  }
})();