n = int(input())
arr = list(map(int, input().split()))
currmax = 1
m = 1

for i in range(1,len(arr)):
        if(arr[i-1]<=arr[i]):
                currmax+=1
        else:
                currmax=1
        m= max(m,currmax)

print(m)
        
        