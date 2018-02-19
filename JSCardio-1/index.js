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
function fizzBuzz() {}



// Call Function
const output = maxCharacter('javascript');

console.log(output);