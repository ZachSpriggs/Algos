/**
 * Sorts an array by comparing adjacent values and swapping.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) {
    // your code here
    var len = arr.length;
    for(var i = 0; i < len-1; i++){
        for(var j = i; j < len-i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

    console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]

    /**
   * Sorts an array by cycling through and selecting the minimum value.
   * 
   * @param {number[]} arr an UNSORTED array of numbers
   * @returns {number[]} the INPUT array (ie. sorts "in place")
   */
    
    function selectionSort(arr) {
    // your code here
    var len = arr.length
    
    for(var i = 0; i < len-1; i++){
        var min = i;
        for(var j = i+1; j < len; j++){
            if(arr[j] < arr[min]){
                min = arr[j];
            }
        }
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
    }
    
    console.log(selectionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]