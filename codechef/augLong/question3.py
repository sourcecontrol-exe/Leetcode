t = int(input())
for _ in range(t):
    [n, p, k] = list(map(int, input().split()))
    slots = (((n-1)//k)+1) * (p % k)
    print(slots+1+(p//k))
