// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // split turns a string into an array & join turns it back into a string
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  ///////////////////////////

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--){
  //   revString += str[i]
  // }
  // return revString;

  // let revString = '';
  // for(let i = 0; i <= str.length -1; i++){
  //   revString = str[i] + revString
  // }
  // return revString;

  // let revString = '';
  // for(let i of str){
  //   revString = i + revString
  // }
  // return revString

  // let revString = '';
  // str.split('').forEach(i => revString = i + revString);
  // return revString;

  return str.split('').reduce((acc, curr) => curr + acc);

}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return str === revString;
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  // using sign method to add sign if there is one
  return parseInt(revString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ');
  // for(let i=0; i< strArr.length; i++){
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  //////////////////////////////////

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ')

  //////////////////////////////////

  return str
    .toLowerCase()
    // replace method takes a regex and func as parameters
    // \b is a word boundary, range of a to z, global and case insensitive
    .replace(/\b[a-z]/gi, char => char.toUpperCase());
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(i => charMap[i] ? charMap[i]++ : charMap[i] = 1);
  // for in to loop through an object
  for(let i in charMap){
    if(charMap[i] > maxNum){
      maxNum = charMap[i];
      maxChar = i;
    }
  }
  console.log(`Letter ${maxChar} is the most common character in ${str} with ${maxNum} repeats`);
  // return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i =1; i<= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log(`Number ${i} is FizzBuzz`);
    } else if (i % 3 === 0){
      console.log(`Number ${i} is Fizz`);
    } else if (i % 5 === 0){
      console.log(`Number ${i} is Buzz`)
    } else {
      console.log(i);
    }
  }
}



// Call Function
//const output = fizzBuzz();

//console.log(output);

 /////////////////////////// /////////////////////////// ///////////////////////////


// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  // match below strips out any punctuation against regex provided
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by lenght
  const sorted = wordArr.sort((a,b) => b.length - a.length )
  
  // If multiple words, put into array
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length)

  // Check if more than one array val
  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 1 

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;
  
  // // Loop while index is less than the array length
  // while(i < arr.length){
  //   // Slice out from the index to the index + the chunk length and push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }
  // return chunkedArr;

  // SOLUTION 2 

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1]

    // Check if last and if last length is equal to the chunk length
    !last || last.length === len ? chunkedArr.push([val]) : last.push(val)
  })

  return chunkedArr
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output);
