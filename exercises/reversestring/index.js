// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Passing but messy //

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// cleaner //

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// new syntax for loop, will not work for access every 3rd character

function reverse(str) {
  let reversed = '';

  // for each new const declared as character of each iterable input 'str'
  // for a variable declaration, temporary variable that is redeclared every time
  // of the loop OF each character of 'str' take that character add it to the start and then add it to reversed.
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// REDUCE HELPER //

// reduce takes all values of an array and condenses them to a single value
// 2 arguments, 1st an arrow function and second a starting inital value,
// we pass in an empty string

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     // whenever reduce runs, take starting argument and run one time for every element in array
//     return character + reversed;
//   }, '');
// }

// new syntax - one line solution
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
