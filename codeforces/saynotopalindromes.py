[l, test] = list(map(int, input().split()))

s = str(input())

for _ in range(test):

    [start, end] = list(map(int, input().split()))

    ws = s[start-1, end]
    