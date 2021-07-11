/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

	if(nums.length == 0) return 0;
	nums = [...new Set(nums)]
	nums.sort((a,b)=> a-b);

	let temp = 1;
	let max = 0;
	let currmax = 1; 

	while(temp<nums.length){
		if(nums[temp-1]+1 == nums[temp]){
			currmax++
		}
		else{
			currmax = 1
		}
		currmax>max? max = currmax: max;
		temp+=1;
	}
	return max>currmax? max: currmax
};

// @lc code=end
