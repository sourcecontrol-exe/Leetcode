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

	let dp1 = nums.slice(0, nums.length - 1)
	let dp2 = nums.slice(1, nums.length)
	if (nums.length <= 3) return Math.max(...nums);

	// for dp 1
	dp1[0] = nums[0];
	dp1[1] = Math.max(nums[0], nums[1]);
	for (let i = 2; i < dp1.length; i++) {
		dp1[i] = Math.max(dp1[i - 1], dp1[i] + dp1[i - 2])
	}

	dp2[1] = Math.max(dp2[0], dp2[1])
	for (let i = 2; i < dp2.length; i++) {

		dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + dp2[i])
	}
	return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])

};
//console.log(rob([2, 7, 9, 3, 1]))
// @lc code=end

