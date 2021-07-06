/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target, sum=0,index, curr =[], res=[]) {
    if(sum==target){
	    res.push([...curr]);
	    return
    }
    if(sum > target || index == candidates.length ) return;
    curr.push(candidates[index]);
    console.log(sum);
    combinationSum2(candidates, target, sum+candidates[index],index,curr, res);
    curr.pop();
    combinationSum2(candidates,target,sum, index+1, curr,res);
    return res;
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8));
// @lc code=end

