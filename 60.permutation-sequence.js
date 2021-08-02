/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
	let s = ''
	for(let i = 1;i<=n;i++){
		s+=i.toString()
	}
	
	function helper(s,res=[],curr=""){
		if(!s.length){
			res.push(curr);
			return;
		}
		for(let i = 0;i<s.length;i++){
			let rest = s.split("").filter((ele,index)=> index !== i).join(",");
			curr+=s[i];
			helper(rest,res,curr);
			curr = curr.slice(0,-1);
		}
		return res
	}
	let a =  helper(s)
	return a;
};
console.log(getPermutation("abs"))
// @lc code=end

