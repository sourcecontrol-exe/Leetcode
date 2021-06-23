/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	if(k> nums.length) k= k%nums.length;
	let lst = nums.splice(nums.length-k,k);
	nums.unshift(...lst);
};
// @lc code=end

