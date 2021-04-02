function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx])
            seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

const arr = [5,1,22,25,6,-1,8,10]
const seq = [1,6,-1,10]

console.log(isValidSubsequence(arr, seq));