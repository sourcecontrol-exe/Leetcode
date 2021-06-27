/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = 0;
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	if (sum % 2 !== 0) return false;

	let target = sum/2;
	var dp = new Array(target + 1).fill(0);
	for (var i = 0; i < nums.length; i++) {
		for (var j = target; j >= nums[i]; j--) {
			dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
		}
	}
	return dp[target] === target;
};

// @lc code=end

