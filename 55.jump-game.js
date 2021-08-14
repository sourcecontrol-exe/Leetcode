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
var canJump = function (nums) {
	let i =0; 
	for(let reach = 0; i<=reach && i<nums.length;i++){
		reach = Math.max(reach, nums[i]+i)
	}
	return i==nums.length
};
// console.log(canJump([2, 3, 1, 1, 4]))
// @lc code=end

