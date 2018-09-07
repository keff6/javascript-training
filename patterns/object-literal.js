/*

The idea of this pattern in to put all the code inside an object literal,
that is to avoid using the global scope.

Tests
> wrapperObject.showMessage(); // Hello
> wrapperObject.greetMe("your name")
> wrapperObject.ageFromBirthYear(your birth year)

*/

let wrapperObject = {
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

