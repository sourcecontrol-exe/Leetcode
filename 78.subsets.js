/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	let res = [[]];
	for(let i =0;i< nums.length;i++){
		res.forEach((ele)=>  res.push([...ele, nums[i]]));
	}
	return res
};
// @lc code=end

