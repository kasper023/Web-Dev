def Xor(a, b):
    a = int(a)
    b = int(b)
    cnt = 0
    if a == 1 :
        cnt += 1
    if b == 1 :
        cnt += 1
    return cnt == 1

a = int(input())
b = int(input())

print(Xor(a, b))
