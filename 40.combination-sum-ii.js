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
var combinationSum = function(c, t, i=0,curr=[],res=[]) {
  	if(t ==0){
		res = [...res,[...curr]]
		return
	}
	if(i>=c.length || t<0) return
	curr.push(c[i])
	combinationSum(c,t-c[i],i+1,curr,res)
	curr.pop()
	combinationSum(c,t,i+1,curr,res)
	return res
};

var combinationSum2 = function(candidates, target) {
   candidates.sort((a,b)=> a-b);
     let result = []

     function getCombos(target,combo=[], start =0){
          if(target <= 0){
               if(target===0 ){ result.push([...combo]);};
               return
          }

          for(var i =start; i< candidates.length ; i++){
               if(i > start && candidates[i] === candidates[i - 1]) continue;
               getCombos(target-candidates[i], [...combo,candidates[i]],i+1);
          }
     }

     getCombos(target);
      return result
    
};
// @lc code=end

