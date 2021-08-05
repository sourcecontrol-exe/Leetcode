/*
 * @lc app=leetcode id=1953 lang=javascript
 *
 * [1953] Maximum Number of Weeks for Which You Can Work
 */

// @lc code=start
/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {

	let sum =  0
	milestones.map(ele => sum += ele);
	
	return Math.min(sum, 2*(sum-Math.max(...milestones))+1)
};
// @lc code=end

