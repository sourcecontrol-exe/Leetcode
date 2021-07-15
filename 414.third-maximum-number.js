/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

	let set = new Set(nums);
	
	let sortedArr = [...set].sort((a,b)=> a-b);

	if(set.size < 3) return sortedArr[sortedArr.length -1]; 

	return sortedArr[sortedArr.length - 3];
    
};
// @lc code=end

