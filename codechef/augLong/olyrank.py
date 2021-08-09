t = int(input())
for _ in range(t):
    [a, b, c, d, e, f] = list(map(int, input().split()))
    if(a+b+c > d+e+f):
        print(1)
    else:
        print(2)
