// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// First Pass

// function anagrams(stringA, stringB) {

// let lowerA = stringA.replace(/[^w]/g, '').toLowerCase();
// let lowerB = stringB.replace(/[^w]/g, '').toLowerCase();

// let string = lowerA.join(lowerB);
// console.log(string);


// }

// 1 -- 

// pull out the keys and compare length between two string maps
// Object.keys(obj).length

// function anagrams(stringA, stringB) {
// // create a character map for stringA and stringB
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             // how many times has a been used in b char map and compare
//             // if not equal return false
//             return false;
//         }
//     }

//     return true;

// }

// function buildCharMap(str) {
//     const charMap = {};

//     let lower = str.replace(/[^\w]/g, '').toLowerCase();
//     console.log(lower);


//     for (let i = 0; i < lower.length; i++){
//         // assigin key of current 
//         charMap[lower[i]] = charMap[lower[i]] + 1 || 1;
//         // console.log(charMap[lower[i]]);
//         // console.log(i);
//     }
//     console.log(charMap);
//     return charMap;
// }

// 2 -- 

function anagrams(stringA, stringB) {
    // === checks for exact if not the same resolves as false
   return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    // remove non letters, conver to lower, split to arrya, sort array and join together
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();


}
    

module.exports = anagrams;
