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
	let currmax = 0, jumps = 0, reach =0
	for (let i = 0; i < nums.length-1;i++){
		currmax = Math.max(currmax, nums[i]+i);
		if(i==reach){
			jumps++
			reach = currmax;
		}
	}
	return jumps
};
// console.log(jump([2, 3, 1, 1, 4]))
// @lc code=end

