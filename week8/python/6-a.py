def min(a, b, c, d) :
    a = int(a)
    b = int(b)
    c = int(c)
    d = int(d)
    mn = a
    if mn > b :
        mn = b
    if mn > c :
        mn = c
    if mn > d :
        mn = d
    return mn

a = int(input())
b = int(input())
c = int(input())
d = int(input())

print()
print(min(a, b, c, d))
