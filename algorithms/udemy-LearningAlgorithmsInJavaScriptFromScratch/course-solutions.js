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

/* --------------------------------------------------------------------
Algorithm # 4:  caesarCipher
_______________________________________________________________________
Description: receive a string and a number. Cipher the string moving 
every character as many positions as the number passed as an argument.
----------------------------------------------------------------------*/

// My solution
// error: does not contemplate uppercase
function caesarCipher(str, num) {
  const lowerCaseStr = str.toLowerCase();
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  
  const result = lowerCaseStr.split('').map(char => {
    const currentPos = letters.indexOf(char);
    if(currentPos > -1) {
      const finalPos = (currentPos + num) % 26;
      return letters.substr(finalPos,1);
    }
    return char;
  }).join('')
  
  return result
}

// Course solution
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}

/* --------------------------------------------------------------------
Algorithm # 5:  reverseWords
_______________________________________________________________________
Description: reverse every word in a string but keep the word order
do not use array reverse() function
----------------------------------------------------------------------*/

// My solution
function reverseWords(string) {
  return string.split(' ')
          .map(word => {
            let reversedWord = ''
            for(let i = word.length -1; i>=0; i--) {
              reversedWord += word[i]
            }
            return reversedWord
          })
          .join(' ')
}

// Course solution
function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  
  return reversedWordsArr.join(' ');
}