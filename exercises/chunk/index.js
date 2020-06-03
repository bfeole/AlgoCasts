// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// First Pass - Not Working

// function chunk(array, size) {
// // max size = size
// // array = given array

// let chunked = new Array(0);
// let counter = 0;
// let tempArr = new Array(0);

// for (let i = 0; i < array.length; i++) {
//     if (counter != size) {
//         tempArr.push[array[i]];
//         counter++;
//     } else if (counter === size) {
//         chunked.push(tempArr);
//         tempArr = new Array(0);
//     } else {
//         return tempArr;
//     }
// }
// return chunked

// }


// -- 1

// function chunk(array, size){
//     const chunked = [];

//     for (let i = 0; i < array.length; i++) {

//         // the last element(in this case array) in chunked array
//         let last = chunked[chunked.length - 1];
//         console.log(last);
//         let cur = array[i];

//         if (!last || last.length === size) {
//         chunked.push([cur]);
//         } else {
//         last.push(cur);
//         }
//     }

//     return chunked;
// }

// -- 2

// slice
// array.slice([starting index], [up to but not including index])
// returns copy of array elements between 'slice'

function chunk(array, size){
    const chunked = [];

    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;
