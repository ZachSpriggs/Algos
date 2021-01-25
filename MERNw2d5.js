/**
 * Finds the indices of the values that add up to the sum.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the TWO INDICES of the elements that add up to the sum
 * Assume there is only one solution.
 * Numbers can only be used once.
 */

    
    function sumTwo(arr, sum) {
        const obj = {};

        for(let i = 0; i < arr.length; i++){
            const currentNumber = arr[i];
            const difference = sum - currentNumber;

            if(obj.hasOwnProperty(difference)){
                return [obj[difference], i];
            }

            obj[currentNumber] = i;
        }
    } 
    
    console.log(sumTwo([1, 2, 11, 15, 7], 9)); // should log [0, 1]
    
    
    /**
     * Finds the most frequent values in an array.
     * 
     * @param {number[]} arr an array of ingegers
     * @param {number} k the number of frequents to find
     * @returns {number[]} the "k" most frequent values in the input array
     * the input array WON'T NECESSARILY BE IN ORDER
     * the output array NEED NOT BE ORDERED
     * you can assume there's always a valid answer
     */
    
    function kMostFrequent(arr, k) {
        // your code here
        let results = [];
        let freqMap = {};
        
        for(let i = 0; i < arr.length; i++){
            // push every index into freqMap
            if(freqMap.hasOwnProperty(arr[i])){
                freqMap[arr[i]] += 1;
            } else {
                freqMap[arr[i]] = 0;
            }
        }
        for(var key in freqMap){
            if(freqMap[key] > 1 && k > 0){
                results.push(parseInt(key));
                k--;
            }
        }
        return results;
    }
    
    console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
    // should log [1, 2] or [2, 1]
    
    console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
    // should log [0]
    
    console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order