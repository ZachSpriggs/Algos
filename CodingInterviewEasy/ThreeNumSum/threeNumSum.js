function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    const rslt = [];
    let left, right, currentSum;

    for (let i = 0; i < array.length - 2; i++) {
        left = i + 1;
        right = array.length - 1;
        while (left < right) {
            currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                rslt.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            }
        }
    }
    return rslt;
}

var arr = [12, 3, 1, 2, -6, 5, -8, 6];
console.log(threeNumberSum(arr, 0))