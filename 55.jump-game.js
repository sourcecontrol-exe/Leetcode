/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 
Greedy Approach
 */
var canJump = function (nums) {
	let n = nums.length, max = 0;
	for (let i = 0; i < n; i++) {
		if (max < i) return false;
		max = Math.max(max, nums[i] + i);
	}
	return true;
};
/* Dynmaic Programming Approach 
*/


// console.log(canJump([2, 3, 1, 1, 4]))
// @lc code=end

