/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {

	let total = 0
	nums.map(ele => total += ele)

	if (total % 2 !== 0) return false;

	let target = total/ 2;

	function helper(sum =0,index=0){
		if(sum == target) return true;
		if(sum> target || index>=nums.length) return false
		return (helper(sum+nums[index], index+1) || helper(sum,index+1))
	}
	return helper();
	/* 
	improvement with memoization
	*/

}
// @lc code=end

