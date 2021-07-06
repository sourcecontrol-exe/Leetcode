/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target, curr = [], sum=0, res =[], index = 0 ) {
    if(sum == target) {
	res.push([...curr])
	return
    }
    if(sum > target || index == candidates.length) return;

    curr.push(candidates[index]);
    combinationSum(candidates, target, curr,sum+candidates[index], res, index);
    curr.pop();
    combinationSum(candidates,target,curr,sum,res,index+1);

    return res;
};
// @lc code=end

