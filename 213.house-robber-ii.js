/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	let dp = new Array(nums.length).fill(0);

	if (nums.length <= 3) return Math.max(...nums)

	dp[0] = nums[0];

	if (nums[0] > nums[1]) {
		nums[nums.length - 1] = 0;
		dp[1] = nums[0];
	}
	else{
		dp[0] = 0; 
		dp[1] = nums[1];
	}

	for (let i = 2; i <dp.length;i++){
		dp[i] = Math.max(dp[i-1] ,nums[i]+dp[i-2]);
	}
	console.log(dp)
	return dp[dp.length-1]
	
};
console.log(rob([2,7,9,3,1]))
// @lc code=end

