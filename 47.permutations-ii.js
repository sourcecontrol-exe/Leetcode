/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums, current = [], result = {}) {

	if (!nums.length) {
		console.log(current.join(""))
		return;
	}
	for (let i = 0; i < nums.length; i++) {
		current.push(nums[i]);
		let rest = nums.filter((ele,index)=> index!=i);
		
		permuteUnique(rest,current,result);
		current.pop();
	}
	return Object.values(result);

};
console.log(permuteUnique([1, 1, 2]))
// @lc code=end

