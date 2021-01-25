/**
 * Removes every element until the invoked callback returns true.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the SAME array (ie. WORKING IN PLACE)
 * 
 * If it never returns true, the array should ultimately be empty
 */

function dropIt(arr, callback) {
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            arr.splice(i, 1)
            i--;
        } else {
            return arr;
        }
    }
    return arr;
}

const isEven = num => num % 2 === 0

const firstArr = [1, 3, 5, 7, 2, 4, 1, 6];
const firstResult = dropIt(firstArr, isEven);

console.log(firstResult); // should log [2, 4, 1, 6]
console.log(firstArr === firstResult); // should log true

const secondArr = [1, 3, 5, 7, 9];
const secondResult = dropIt(secondArr, isEven);

console.log(secondResult); // should log []
console.log(secondArr === secondResult); // should log true


/**
 * Determines whether a string can be rearranged to make a palindrome.
 * 
 * @param {string} str the original string
 * @return {boolean}
 * 
 * palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
 */

function couldBePalindrome(str) {
    // your code here
    let counter = {};
    let letter;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        letter = str[i];
        counter[letter] = counter[letter] || 0;
        counter[letter]++;
    }
    console.log(counter)
    for (var key in counter) {
        sum += counter[key] % 2;
    }
    return sum < 2;
}

console.log(couldBePalindrome('PPo'));
// should log true - could be 'PoP'

console.log(couldBePalindrome('oooPP'));
// should log true - could be 'PoooP'

console.log(couldBePalindrome('Yuuyuu'));
// should log false; `Yuuuuy` is not due to casing