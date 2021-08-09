t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    arr.sort()
    ans = -10e9
    k = len (arr)
    sum1 = sum(arr)
    sum2 = 0
    elements = 0
    for i in range(len(arr)-1):
           sum1-= arr[i]
           sum2+=arr[i]
           ans = max(ans, sum2/(i+1) + sum1/(k-i-1))
           
    print(round(ans,9))
