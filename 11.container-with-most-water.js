/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let low = 0;
	let high = height.length - 1;
	let maxArea = 0
	while (low < high) {

		maxArea = Math.max(maxArea, (high-low)*Math.min(height[low], height[high]));
		if (height[low] <= height[high]) {
			low++
		}
		else {
			high--;
		}
	}
	return  maxArea
};
// @lc code=end

