/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   
	let left = 0, right = nums.length-1;

	while(left<right){
		let mid = left+Math.floor((right-left)/2);
		if(nums[right] >nums[left]) left = mid+1
		else right = mid-1
	}
	return nums[left]
};
// @lc code=end

