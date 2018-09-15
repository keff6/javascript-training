/*

Provides structure and helps organize the code

is a combination of:
* Namespaces
* IIFE's
* Private and privileged members
* Declaring dependencies

The Module Pattern must satisfy the following:
  Private members live in the closure.
  Public members are exposed in the return object.

Private members are defined in the closure.
Public members are defined in the return object literal.
References to public members are via this, whenever possible.

Pros:
+ Provides encapsulation

Cons:
- More to type

*/

var myPc = myPc || {}
myPc.projects = myPc.projects || {};
myPc.projects.javascript = myPc.projects.javascript || {};
myPc.projects.javascript.module = myPc.projects.javascript.module  || {};

// This is the module
myPc.projects.javascript.module = (function() {
  // Private function, not exposed
  function showMessage(message) { 
    console.log(message);
  }

  return {
    message: 'Hello! ',
    // Public API
    greetMe: function (name = '') {
      showMessage(this.message + name);
    }
  }
})();