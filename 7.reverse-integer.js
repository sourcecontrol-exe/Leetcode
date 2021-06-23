/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let c = Math.sign(x);
  
   let ans = c*parseInt(Math.abs(x).toString().split("").reverse().join(''),10)
   return ans>=Math.pow(-2,31) && ans<Math.pow(2,31)? ans:0;
};

// @lc code=end

