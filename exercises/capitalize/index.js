// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// First Pass

// function capitalize(str) {
//     // create an empty holding array
//     const words = [];
//     // loop through given string and split by space
//     for ( let word of str.split(' ')) {
//         // uppercase first character of each word and add to word - index 1
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     // rejoin separated words by spaces and return str with uppercased first letter
//     return words.join(' ');
// }

function capitalize(str) {
    // create 'result' which is the first char of the input string capitalized
    let result = str[0].toUpperCase();
    // for each char in strin
    for (let i = 1; i < str.length; i++) {
        // if the character to the left a space
        if (str[i - 1] === ' ') {
            // capitalize it and add it to result
            result+= str[i].toUpperCase();
        } else {
            // else add it to result
            result += str[i];
        }
    }

    return result;

}

module.exports = capitalize;
