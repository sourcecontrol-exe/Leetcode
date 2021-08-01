/*
 * @lc app=leetcode id=456 lang=javascript
 *
 * [456] 132 Pattern
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var find132pattern = function (nums) {
	let s3 = Number.MIN_SAFE_INTEGER;
	let stack = [];

	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] < s3) return true;
		while (stack.length  > 0 && nums[i] > stack[stack.length-1]){
			s3 = stack.pop();
		}
		stack.push(nums[i]);
	}
	return false;
}
// @lc code=end

