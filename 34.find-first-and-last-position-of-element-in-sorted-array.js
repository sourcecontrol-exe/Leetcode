/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {

	let low = 0, high = nums.length - 1, mid;

	// find the start
	while(low<=high){
		mid = low+ Math.floor((high-low)/2)
		if(nums[mid] < target) low = mid+1
		else  high = mid -1
	}
	if(nums[low] !== target) return [-1,-1];

	let landMark = low;
	high = nums.length-1;

	while(low<=high){
		mid = low+ Math.floor((high-low)/2)
		if(nums[mid] <= target) low = mid+1
		else high = mid-1;
	}
	return [landMark, high]	
};
// console.log(searchRange([], 8));
// @lc code=end
