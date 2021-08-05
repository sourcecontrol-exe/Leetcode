/*
 * @lc app=leetcode id=1955 lang=javascript
 *
 * [1955] Count Number of Special Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function (nums) {

	let mod = Math.pow(10,9) + 7;

	let dp = [1,0,0,0];
	for(let item of nums){
		dp[item+1] += (dp[item+1] + dp[item]);
		dp[item+1]%= mod
	}
	return dp[dp.length-1]
}
// @lc code=end

