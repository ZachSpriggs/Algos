/**
 * Creates an array of objects of non-consecutive numbers in the input array.
 * 
 * @param {number[]} arr an array of integers
 * @returns {Object[]} an array of OBJECTS with the index and value 
 * Note: the array should have ONLY non-consecutive values
 * The first element of the array is NEVER considered non-consecutive
 */
/**
 * Creates an array of objects of non-consecutive numbers in the input array.
 *
 * @param {number[]} arr an array of integers
 * @returns {Object[]} an array of OBJECTS with the index and value 
 * Note: the array should have ONLY non-consecutive values
 * The first element of the array is NEVER considered non-consecutive
 */

    function allNonConsecutive(arr) {
        // your code here

        let solution = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i]+1 !== arr[i+1]){
                solution.push({i:i+1, n:arr[i+1]})
            }
        }
        return solution;

        
        // let temp = arr[0];
        // let newList = [];
        // for(let j = 1; j < arr.length; j++){
        //     if((temp+1) !== arr[j]){
        //         let obj = {
        //         i: j,
        //         n: arr[j]
        //         }
        //         newList.push(obj);
        //     }
        //     temp = arr[j];
        // }
        // return newList;
    }
                                //   0  1  2  3  4  5  6  7
    console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
    // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
    
    console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
    // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives
    
    
    /**
     * Create an array of all consecutive values which add up to a given sum.
     * 
     * @param {number[]} arr an UNORDERED array of integers
     * @returns {Array<Array<number>>} a 2D array of numbers, with each inner array making up the sum
     * BONUS: what if there are zeros in the input array?
     */
    
    function findConsecutiveSums(arr, sum) {
        // your code here
        let sumArr = 0;
        let newArr = [];
        let returnArr = [];
    
        for(let i = 0; i < arr.length; i++){
            console.log("i   "+i);
            for(let j = i; j < arr.length; j++){
                newArr.push(arr[j]);
                sumArr += arr[j];
                if(sum === sumArr){
                returnArr.push(newArr);
                break;
                }
            }
            sumArr = 0;
            newArr = [];
        }
        return returnArr;
    }
    
    console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
    // should log [
    //   [2, 5, 3, 6],
    //   [3, 6, 7]
    // ]