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
var combinationSum = function(candidates, target) {
  
	candidates.sort((a,b)=> a-b);
	let res = [];
	let set = new Set();
	function helper(sum=0,index = 0,curr = []){

		if(sum == target){
			let key  = curr.join("")
			if(set.has(key)) return
			set.add(key);
			res.push([...curr]);
			return; 
		}
		if(index == candidates.length || sum > target) return;

		curr.push(candidates[index]);
		helper(sum+candidates[index], index+1, curr);
		curr.pop();
		helper(sum, index+1, curr);
	}
	helper();
	return res;
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

