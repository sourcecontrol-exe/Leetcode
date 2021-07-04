/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, curr=[], result =[]) {

	if(!nums.length){ result.push([...curr]); return}

	for(let i = 0;i<nums.length;i++){
		curr.push(nums[i])
		let rest = nums.filter((ele,index)=> index!=i);
		permute(rest,curr,result);
		curr.pop();
	}
	return result
};
console.log(permute([1,2,3]))
// @lc code=end

