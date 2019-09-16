/*
Index
=======================================================================
Algorithm # 1:  FizzBuzz
Algorithm # 2:  harmlessRansomNote
Algorithm # 3:  isPalindrome
Algorithm # 4:  caesarCipher
Algorithm # 5:  reverseWords
Algorithm # 6:  reverseArrayInPlace
Algorithm # 7:  meanMedianMode
Algorithm # 8:  twoSum
Algorithm # 9:  binary search
Algorithm # 10:  fibonacci
Algorithm # 11:  fibonacci memoized
Algorithm # 12:  sieveOfErathostenes
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

/* --------------------------------------------------------------------
Algorithm # 6:  reverseArrayInPlace
_______________________________________________________________________
Description: reverse an array in place an return the same array
manipulated. Do not use reverse() function
----------------------------------------------------------------------*/

// My solution
function reverseArrayInPlace(arr){
  for(let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    const aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
  }
  return arr;
}

// Course solution
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}

/* --------------------------------------------------------------------
Algorithm # 7:  meanMedianMode
_______________________________________________________________________
Description: return and object like:
{
  mean: 0, median: 0, mode: 0
}

from a number array using functional programming
----------------------------------------------------------------------*/

// My solution
function getMean(array){
  return array.reduce((current, total) => current + total) / array.length;
}

// slightly incorrect
function getMedian(array){
  const aux = array.slice();
  return aux.sort((a,b) => a-b)[Math.ceil(aux.length / 2)];
}

function getMode(array){
  const aux = array.sort((a,b) => a-b)
  let mode = array[0]
  let maxCount = 0;
  let currentCount = 0;
  
  for(let i = 0; i < aux.length - 1; i++) {
    if(aux[i] === aux[i+1]) {
      currentCount++
    } else {
      if(currentCount > maxCount) {
        mode = aux[i];
        maxCount = currentCount;
        currentCount = 0;
      }
    }
  }
  return mode;
}

function meanMedianMode(array){
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

// Course solution
function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
 
function getMean(array) {
  var sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  var mean = sum / array.length;
  return mean;
}
 
function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;
  
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }
  
  return median;
}
 
function getMode(array) {
  var modeObj = {};
  
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

/* --------------------------------------------------------------------
Algorithm # 8:  twoSum
_______________________________________________________________________
Description: given an array and a number, return all the pairs
iside the array that sums up to number
----------------------------------------------------------------------*/

// My solution
function twoSum(array, number) {
  const numberToFind = {}
  const result = [];
  for(let i = 0; i < array.length; i++) {
    if(numberToFind[array[i]]){
      result.push([array[i], numberToFind[array[i]]])
    }
    else {
      numberToFind[number - array[i]] = array[i]
    }
  }
  return result
}

// Course solution
function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}

/* --------------------------------------------------------------------
Algorithm # 9:  binary search
_______________________________________________________________________
Description: given an array and a number, search for that number
in a binary way using recursion
+ Assume the array is always sorted
----------------------------------------------------------------------*/

// My solution
function binarySearch(arr, num){
  const middleIndex = Math.ceil(arr.length / 2) - 1;
  if(arr.length === 0) {
    return false
  } else if(arr[middleIndex] === num) {
    return true
  } else {
    const newArr = arr[middleIndex] > num ? arr.slice(0, middleIndex) : arr.slice(middleIndex + 1)
    return binarySearch(newArr, num)
  }
}

// Course solution
function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];
  
  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
      return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  else if (middleElem > key && numArray.length > 1) {
      return binarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false;
}

/* --------------------------------------------------------------------
Algorithm # 10:  fibonacci
_______________________________________________________________________
Description: given a number return the fibonacci value in that position
use recursion
----------------------------------------------------------------------*/

// My solution (O2 elevated n)
function fibonacci(n){
  if(n <= 0) return 0
  else if(n === 1 || n === 2) return 1
  else return fibonacci(n-1) + fibonacci(n-2)
}

// Course solution
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

/* --------------------------------------------------------------------
Algorithm # 11:  fibonacci mmeoized (fibMemo)
_______________________________________________________________________
Description: program a fibonacci search that uses cache to made the
search for a value only once
----------------------------------------------------------------------*/

// My solution
// Didn't came up with anything after 2 days

// Course solution
function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

/* --------------------------------------------------------------------
Algorithm # 12:  sieveOfErathostenes
_______________________________________________________________________
Description: create a function that receives a num, and return all the
prime numbers between 0 and num
----------------------------------------------------------------------*/

// My solution
function sieveOfErathostenes(num) {
  const initialArray = Array(num).fill(true)
  const primes = []
  for(let i = 0; i < num; i++) {
    if(i < 2) initialArray[i] = false
    if(initialArray[i] !== false) {
      for(let j = i*2; j < num; j+=i){
        initialArray[j] = false
      }
    }
  }
  const result = initialArray.map((val, index) => val && index).filter(n => Number(n))
  return result
}

// Course solution
function sieveOfEratosthenes(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }
  
  primes[0] = false;
  primes[1] = false;
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }
  
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  
  return result;
}