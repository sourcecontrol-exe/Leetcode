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

	function permute(sum1, sum2=0, i = nums.length-1, set = {}){
		let key = sum1+""+sum2

		if(key in set) return set[key];
		
		if(sum1 == sum2) return true

		if(sum1<sum2 || i < 0) return false;

		

		let a = permute(sum1 - nums[i], sum2 + nums[i], i-1, set)
		let b = permute(sum1,sum2, i-1, set)
		set[key] = a || b
		return set[key]
	}
	return permute(total)
}
// @lc code=end

