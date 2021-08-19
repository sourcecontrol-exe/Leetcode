/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
		if(n==0) return false
	 //console.log((Math.log(n)/ Math.log(4)) , Math.floor(Math.log(n)/ Math.log(4)))
	 return Math.log(n)/Math.log(4) == Math.floor(Math.log(n)/ Math.log(4))
};
// console.log(isPowerOfFour(0))
// @lc code=end

