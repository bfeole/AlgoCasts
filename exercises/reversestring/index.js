// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// -- 1
// first pass solution
// function reverse(str) {
//     let reversed = []
//     for(let i = 0; i < str.length; i++){
//         reversed.unshift(str[i]);
//     }
    
//     let string = reversed.join('').toString();

//     return string;
    
// }

// -- 2

// function reverse(str) {
//     // str.split creates an array with string split by spaces
//     const arr = str.split('');
//     // .reverse returns an array with reversed index and join returns them to a string
//     return arr.reverse().join('');

//     // one liner
//     // return str.split('').reverse().join('')
// }

// - 3 

// function reverse(str) {
//     let reversed = '';

//     // for (let character of str) {
//     for ( let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }

//     return reversed;
// }

// - 4
// reduce helper

function reverse(str) {
    // convert str to array with split
    // reduce condenses down to single value
    // two arguments, fn and starting inital value for the fn
    // takes starting argument and pass it into arrow fn and whatever is returned
    // becomes starting argument for next iteration
    // runs for every element in array.
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

// -- Debugger steps -- 
// Add debugger statement
// call fn manually
// in term- run `node inspect index.js`
// continue exec - `c` enter
// launch a 'repl' session type `repl` enter
// exit 'repl' `ctrl+c`

reverse('asdf');

module.exports = reverse;
