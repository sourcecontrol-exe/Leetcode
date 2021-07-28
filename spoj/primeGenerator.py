import math


def check(n):
    if n == 1:
        return False
    for x in range(2, (int)(math.sqrt(n))+1):
        if n % x == 0:
            return False
    return True


test = int(input())
for _ in range(test):
    [n, k] = [int(x) for x in input().split()]
    arr = [True]*(k-n)
    for l in range(n, k+1):
        if(check(l)):
            print(l)
