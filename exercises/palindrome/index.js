// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// first pass
// function palindrome(str) {
//    let reverse = str.split('').reverse().join('');
//    return (reverse === str ? true : false);
// }

// -- 2
// every array helper
// every does a boolean check on every element in an array
// array.every((val) => val > 5)
// double comparison issue - does 2x the work

function palindrome(str) {
   return str.split('').every((char, i)=> {
        return char === str[str.length - i - 1];
    })

 }

module.exports = palindrome;
