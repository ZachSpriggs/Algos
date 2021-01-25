/**
 * Creates an intersection (elements in both) of two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArrays(arr1, arr2) {
    let result = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            if (arr1[p1] !== result[result.length -1]) {
                result.push(arr1[p1]);
            }
            p1++;
            p2++;
        } else if (arr1[p1] < arr2[p2] ) {
            p1++;
        } else {
            p2++;
        }
    }
return result;
}
    
    console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));
    

    // should log [2, 2]
    
    
    /**
     * BONUS: ensure that each element in the returned array is unique
     * 
     * @param {number[]} arr1 a sorted array of numbers
     * @param {number[]} arr2 a sorted array of numbers
     * @returns {number[]} a NEW SORTED array of the shared elements
     */
    
    function intersectSortedArraysDedupe(arr1, arr2) {
        // your code here
        let newArr = intersectSortedArrays(arr1, arr2);
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i] === newArr[i+1]){
                newArr.pop();
            }
        }
        return newArr;
    }
    
    console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
    // should log [2]