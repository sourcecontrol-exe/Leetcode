/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
	let sorted = [], result = [];
	for (var i = nums.length - 1; i >= 0; i--) {
		let left = 0, right = sorted.length;
		while (left < right) {
			let mid = left + Math.floor((right-left)/2);
			console.log(mid)
			if(nums[i] > sorted[mid]){	
				left = mid+1;
			}
			else{
				right = mid;
			}
		}
		result.unshift(left);
		sorted.splice(left,0,nums[i]);
	}
	return result;
};
// @lc code=end

