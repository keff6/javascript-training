/*
Index
=======================================================================
Algorithm # 1:  FizzBuzz
Algorithm # 2:  harmlessRansomNote
Algorithm # 3:  isPalindrome

*/
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

/* --------------------------------------------------------------------
Algorithm # 2:  harmlessRansomNote
_______________________________________________________________________
Description: return true if all words from noteText are inside 
magazineText, return false otherwise.
----------------------------------------------------------------------*/

// My solution  O (n)
// Has an error, if some word is twice or more, my solution does not track
// if there are enough to cover the ransom note
function harmlessRansomNote(noteText, magazineText) {
  const noteArray = noteText.split(' ')
  for(let i = 0; i < noteArray.length; i++) {
    const regex = new RegExp('\\b(\\w*' + noteArray[i] + '\\w*)\\b', 'gi');
    if(!magazineText.match(regex)) {
      return false;
    }
  }
  return true;
}

// Course solution
function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};
  
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false; 
  });
  
  return noteIsPossible;
}

/* --------------------------------------------------------------------
Algorithm # 3:  isPalindrome
_______________________________________________________________________
Description: check if a string is palindrome or not.
----------------------------------------------------------------------*/

// My solution
function isPalindrome(string) {
  const sanitizedString = string.replace(/[&\/\\#,+()$~%.'":*?<>{}\s]/g,'').toLowerCase();
  for(let i = 0, j = sanitizedString.length - 1; i <= sanitizedString.length / 2; i++, j--){
    if(sanitizedString[i] !== sanitizedString[j]) return false
  }
  
  return true
}

// Course solution
function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}