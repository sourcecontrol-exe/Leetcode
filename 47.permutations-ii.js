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
var permuteUnique = function (nums, curr = [], result = []) {

	if(!nums.length){ result.push([...curr]); return}

	let set = new Set()
	for(let i = 0;i<nums.length;i++){
		if(set.has(nums[i])) continue;
		curr.push(nums[i])
		set.add(nums[i])
		let rest = nums.filter((ele,index)=> index!=i);
		permuteUnique(rest,curr,result);
		curr.pop();
	}
	return result
};
// @lc code=end

