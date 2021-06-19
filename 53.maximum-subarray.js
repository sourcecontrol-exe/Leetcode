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
	if (nums.length == 0) return 0;
	let dp = new Array(nums.length).fill(0);

	dp[0] = nums[0];

	for (var i = 0; i < nums.length; i++) {
		dp[i+1] = Math.max(nums[i] + dp[i], dp[i])
	}
	console.log(dp)
	//return dp[dp.length-1]
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5]))
/*0 0 0 0 0
-2 1
*/

// @lc code=end

