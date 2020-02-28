// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// first pass
// get reversed string of ints
// if n == 0, return 0
// if input is positive convert nums to int and return
// if input is negative, return negative abs value of converted string int
// function reverseInt(n) {
//   let nums = n.toString().split('').reverse().join('');
//   if(n == 0){
//       return 0;
//   } else {
//       return (Math.sign(n) === 1 ? parseInt(nums) : -Math.abs(parseInt(nums)));
//   }
// }

// -- 1
function reverseInt(n) {
    let nums = n.toString().split('').reverse().join('');
    return parseInt(nums) * Math.sign(n);

    // if (n < 0) {
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);
}

module.exports = reverseInt;
