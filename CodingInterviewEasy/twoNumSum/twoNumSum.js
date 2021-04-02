function twoNumberSum(array, targetSum) {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum == targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}

const arr = [3,5,-4,8,11,1,-1,6]
console.log(twoNumberSum(arr, 10))