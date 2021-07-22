/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let left = 0, right = height.length - 1, totalwater = 0, maxleft = 0, maxright = 0;
	while (left < right) {
		if(height[left] <= height[right]){
			if(height[left] >= maxleft){
				maxleft = height[left]
			}
			else{
				totalwater += maxleft - height[left];
			}
			left++
		}
		else{
			if(height[right] >= maxright){
				maxright = height[right];
			}
			else{
				totalwater += maxright - height[right];
			}
			right--;
		}
	}
	return totalwater;
};
// @lc code=end

