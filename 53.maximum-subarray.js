/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let dp = new Array(nums.length).fill(0);
	dp[0] = nums[0];
	dp[1] = Math.max(dp[0]+dp[1], dp[0]);
	for(let i = 2 ;i< nums.length ;i++){
		dp[i] = Math.max(dp[i]+dp[i-1], dp[i-1]);
	}
	console.log(dp)
};
console.log([-2,1,-1,4 ,-1,2,1,-5,4]);
// @lc code=end

