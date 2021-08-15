/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let max = 0, currmax = 0, jump =0;
	for (let i = 0; i < nums.length-1; i++) {
		currmax = Math.max(currmax, nums[i] + i)
		if (i == max) {
			max = currmax
			jump++;
		}
	}
	return jump
};
console.log(jump([2, 3, 1, 1, 4]))
// @lc code=end

