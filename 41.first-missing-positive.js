/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	let set = new Set(nums);
	let min = Math.min(...nums);
	if(min> 1) return 1;
	for(var i = 1; i<=nums.length;i++){
		if(!set.has(i)) return i;
	}
	return i;
};
// @lc code=end

