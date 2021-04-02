def twoNumSum(array, targetSum):
    for i in range(len(array) -1):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return []

arr = [3,5,-4,8,11,1,-1,6]
print(twoNumSum(arr, 10))