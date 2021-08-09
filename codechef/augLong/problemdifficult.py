t = int(input())
for _ in range(t):
        a = list(map(int, input().split()))
        d = list(set(a))
        print(len(d)//2)