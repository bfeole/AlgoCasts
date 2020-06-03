// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Common String Questions:
// What is the most common charcter in the string?
// Does string A have the same charcaters as string B? (anagram)
// Does the given string have any repeated characters in it?

// First Pass
// function maxChar(str) {
//     let string = str.split('');
//     let ht = new Map();
//     for(let i = 0; i < string.length; i++) {
//         if(!ht.has(string[i])){
//             return ht.set(string[i], 1)
//         } else {
//            return ht.set(string[i], 1 )
//         }
//     }
//     return Math.max(Array.from(ht.values()));
// }


// -- 1
function maxChar(str) {
        // declare charMap obj
        const chars = {};
        let max = 0;
        let maxChar = '';

        // Loop through string,
        // if exists, add 1 to value
        // if not create and set value to 1
        for (let i = 0; i < str.length; i++){
            if(chars[str[i]]){
                chars[str[i]]++;
            } else {
                chars[str[i]] = 1;
            }
        }

        // char is assigned keys in obj chars
        for (let char in chars) {
            // if obj[key] = value > max
            if (chars[char] > max) {
                // set max to that value
                max = chars[char];
                // we return the character saved as a key as maxChar
                maxChar = char;
            }
        }

        return maxChar;

        // console.log(chars);
        // return Math.max(Array.from(chars[]))
    }

module.exports = maxChar;
