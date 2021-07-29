import math
import sys
def UBK(sum, index, arr):
        if(sum<0): return sys.maxint
        
        if(sum == 0 or index<1): return 0 
        
        if(arr[index-1] == -1): return UBK(sum,index-1,arr)
        
        include =  UBK(sum-index, index, arr) + arr[index-1]
        
        exclude = UBK(sum, index-1,arr)
        
        return min(include, exclude)

ans = UBK(5, 5,[-1,-1,4,5,-1])
print(ans)