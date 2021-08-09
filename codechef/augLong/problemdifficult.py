t = int(input())
for _ in range(t):
        a = list(map(int, input().split()))
        d = list(set(a))
        if(len(d) == 1): print(0)
        elif(len(d) == 2 or len(d) == 3): print(1)
        else: print(2)