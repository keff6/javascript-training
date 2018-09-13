/*

Provides structure and helps organize the code

is a combination of:
* Namespaces
* IIFE's
* Private and privileged members
* Declaring dependencies

Pros:
+ Provides encapsulation

Cons:
- More to type

*/

var myPc = myPc || {}
myPc.projects = myPc.projects || {};
myPc.projects.javascript = myPc.projects.javascript || {};
myPc.projects.javascript.module = myPc.projects.javascript.module  || {};

myPc.projects.javascript.module = (function() {
  // Private Variable
  var message = 'Hello! ';

  // Private function, not exposed
  function showMessage() { 
    console.log(message);
  }

  return {
    // Public API
    greetMe: function (name) {
      message += name;
      showMessage();
    }
  }
})();