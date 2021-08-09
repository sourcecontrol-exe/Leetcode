t = int(input())
for _ in range(t):
    l = list(map(int, input().split()))
    l.sort()
    [a, b, c, d] = l
    if(a == b and b == c and c == d):
        print(0)
    elif((a == b and b == c) or (b == c and c == d)):
        print(1)
    else:
        print(2)
