/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
 
	let hash = {}

	for(let i = 0;i< s.length;i++){
		if(!hash[s[i]]) hash[s[i]] = 0
		hash[s[i]]++;
	}

	let sorted = Object.keys(hash).sort((a,b)=> hash[b] - hash[a]);

	let ans = []
	let index = 0
	for(let item of sorted){
		if(hash[item] > (s.length+1)/2) return "";
		
		for(let i =0; i<hash[item];i++){
			if(index >=s.length) index = 1;
			ans[index] = item
			index+=2
		}
	}
	return ans.join("")
};

// @lc code=end

