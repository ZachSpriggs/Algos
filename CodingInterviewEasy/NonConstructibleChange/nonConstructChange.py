def nonConstructibleChange(coins):
    coins.sort()

    change = 0
    for coin in coins:
        if coin > change + 1:
            return change + 1
        change += coin
    return change + 1

coins = [5, 7, 1, 1, 2, 3, 22]
coins1 = [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]

print(nonConstructibleChange(coins))
print(nonConstructibleChange(coins1))