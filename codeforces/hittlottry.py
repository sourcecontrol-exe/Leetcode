
arr = [100, 20, 10, 5, 1]
target = int(input())
ans = 0
for i in range(len(arr)):
       ans += target//arr[i]
       target = target % arr[i]
print(ans)