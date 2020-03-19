def Election(a, b, c):
    a = int(a)
    b = int(b)
    c = int(c)
    cnt = 0
    if a == 1:
        cnt += 1
    if b == 1:
        cnt += 1
    if c == 1:
        cnt += 1
    return cnt > 1

    
a = int(input())
b = int(input())
c = int(input())

print(Election(a, b, c))
