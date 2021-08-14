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
	let temp = nums[nums.length - 1], last = nums.length-1
	for (let i = nums.length - 2; i <=0; i--) {
		if(nums[i]+ i >= last) last = i
	}
	console.log(last)
	return last==0?true: false
};
console.log(jump([2, 3, 1, 1, 4]))
// @lc code=end

