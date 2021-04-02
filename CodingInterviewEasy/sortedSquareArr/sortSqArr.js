function sortedSquaredArray(array) {
    // Write your code here.
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * array[i]);
    }
    const rslt = newArr.sort((a, b) => a - b);
    return rslt;
}

const arr = [1, 2, 3, 5, 6, 8, 9];

console.log(sortedSquaredArray(arr));