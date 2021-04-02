def sortedSquareArray(array):
    sortedSquares = [0 for _ in array]

    for idx in range(len(array)):
        value = array[idx]
        sortedSquares[idx] = value * value
    
    sortedSquares.sort()
    return sortedSquares

arr = [1, 2, 3, 5, 6, 8, 9]

print(sortedSquareArray(arr))