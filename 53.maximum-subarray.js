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
	if(nums.length ==0) return 0;
	if(nums.length ==1 ) return nums[0];
	let dp = new Array(nums.length).fill(0);
	let max = nums[0];
	dp[0]= nums[0];

	for(let i =1;i< nums.length;i++){
		dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
		if(dp[i] > max){
			max = dp[i];
		}
	}
	return max;
};

// @lc code=en
