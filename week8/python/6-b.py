def power(a, n):
    res = 1
    for i in range(int(n)) :
        res *= int(a)
    return res

a = int(input())
n = int(input())

print(power(a, n))
