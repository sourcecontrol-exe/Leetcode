/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let leftArr = [1];
	let leftmul = 1;

	for (let i = 0; i < nums.length; i++) {
		leftArr[i] = leftmul;
		leftmul *= nums[i];
	}
	let rightArr = new Array(nums.length);
	let rightMul = 1;

	for (let i = nums.length - 1; i >-1 ;i--){
		rightArr[i] = rightMul;
		rightMul*=nums[i];
		rightArr[i]*=leftArr[i]
	}
	return rightArr;
};
// @lc code=end

