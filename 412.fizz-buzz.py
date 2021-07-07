#
# @lc app=leetcode id=412 lang=python3
#
# [412] Fizz Buzz
#

# @lc code=start
class Solution:
    def fizzBuzz(self, n: int):
        sol = []
        for i in range(n):
            s= ''
            if((i+1)%3 == 0):
                s+="Fizz"
            if((i+1)%5 == 0):
                s+="Buzz"
            if(len(s)==0):
                sol.append(str(i+1))
            else:
                sol.append(s)
        return sol
        
# @lc code=end

