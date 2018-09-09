/*

The idea of this pattern in to create a very unique path, that will be 
specific for your project to avoid using the global scope.
It's similar to object literal, but more specific

Pros:
+ Helps reduce the number of globals required by our programs
+ Help avoid naming collissions
+ Help avoid excessive name prefixing

Cons:
- More to type
- Only one global instance means that any part of the code can modify it
- Long nested names means longer property resolution lookup


Tests
> myPc.projects.javascript.showMessage(); // Hello
> myPc.projects.javascript.greetMe("your name")
> myPc.projects.javascript.ageFromBirthYear(your birth year)

*/

var myPc = myPc || {}
myPc.projects = myPc.projects || {};
myPc.projects.javascript = myPc.projects.javascript || {};

myPc.projects.javascript = {
  message: 'Hello!',
  currentYear: new Date(),
  showMessage: function() { 
    console.log(this.message) 
  },
  greetMe: function(name) {
    console.log(`Hello ${name}! Nice to meet you!`);
  },
  ageFromBirthYear: function(birthYear) {
    const age = this.currentYear.getFullYear() - birthYear;
    console.log(`Your current age is ${age}`)
  }
}