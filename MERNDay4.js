/**
 * Picks a random pivot index and partitions the array's values around it.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @param {number} startIdx the starting index
 * @param {number} endIdx the end index
 * @returns {number} the final pivot index
 * 
 * Note: The array should be mutated (this is in place)
 */

function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    // option 1 for base case:  if pivot is past the start index
    // option 2 for base case: if startIdx === endIdx
    if (startIdx >= endIdx) {
        return arr;
    }

    const pivot = arrayPartition(arr, startIdx, endIdx);

    // checking items in array to the left of pivot
    if (startIdx < pivot - 1) {
        quickSort(arr, startIdx, pivot - 1);
    }
    if(pivot < endIdx){
        quickSort(arr, pivot, endIdx);
    }

    return arr;
    
}

console.log(quickSort([1, 5, 2, 8, 3, 4]));
console.log(quickSort([2, 57, 12, 0, 5, 9]))
// should log [1, 2, 3, 4, 5, 8]

function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivotIndex = Math.ceil(Math.random() * (endIdx - startIdx) + startIdx);
    let pivot = arr[pivotIndex];
    
    while(startIdx < endIdx){
        while(arr[startIdx] < pivot){
            startIdx++;
        }
        while(arr[endIdx] > pivot){
            endIdx--;
        }
        if (startIdx < endIdx){
            let temp = arr[startIdx];
            arr[startIdx] = arr[endIdx];
            arr[endIdx] = temp;
        }
    }
    return startIdx;
}