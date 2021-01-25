/**
 * Creates a new sorted array from two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a sorted array with all elements from both input arrays
 */

    function combineSortedArrays(arr1, arr2) {
    // your code here
        let arr3 = [];
        let i = 0;
        let j = 0;
        let m = arr1.length;
        let n = arr2.length;
        while(i<n && j<m){
            if(arr1[i] < arr2[j]){
                arr3.push(arr1[i++]);
            } else {
                arr3.push(arr2[j++]);
            }
        }
        while(i < n){
            arr3.push(arr1[i++]);
        }
        while(j < m){
            arr3.push(arr2[j++]);
        }
    return arr3;
    }
    
    console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
  // should log [1, 2, 3, 4, 5, 6]
    console.log(combineSortedArrays([1], [3])); // should log [1, 3]
    console.log(combineSortedArrays([1], [])); // should log [1]
    
    
    /**
   * Sorts an array with a "divide and conquer" approach.
   * Uses combineSortedArrays internally.
   * 
   * @param {number[]} arr an UNSORTED array of numbers
   * @returns {number[]} the new sorted array
   */
    
    function mergeSort(arr) {
        const merge = (left, right) => {
            const newArr = [];
            while(left.length && right.length){
                newArr.push(left[0] > right[0] ? right.shift(): left.shift())
            }
            while(left.length){
                newArr.push(left.shift())
            }
            while(right.length){
                newArr.push(right.shift())
            }
            return newArr;
        }
        return merge(mergeSort(left), mergeSort(right));
    }
    
    console.log([1, 2, 3, 4, 5].slice()); // returns [1, 2, 3, 4, 5]
    console.log([1, 2, 3, 4, 5].slice(2)); // returns [3, 4, 5]
    console.log([1, 2, 3, 4, 5].slice(2, 4)); // returns [3, 4]
    
    console.log(mergeSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]