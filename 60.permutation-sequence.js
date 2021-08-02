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
	let s = []
	for(let i = 1;i<=n;i++){
		s.push(i)
	}
	
	function helper(s,k,res=[],curr=[]){
		if(!s.length){
			res.push([...curr]);
			k--;
			return;
		}
		for(let i = 0;i<s.length;i++){
			let rest = s.filter((ele,index)=> index !== i)
			curr.push(s[i])
			if(res.length == k) break
			helper(rest,k,res,curr);
			curr.pop()
		}
		return res
	}
	let a =  helper(s,k)
	return a[a.length-1].join("")
};
// @lc code=end

