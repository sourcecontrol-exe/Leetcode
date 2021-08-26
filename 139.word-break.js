/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	 
	let set = new Set (wordDict);
	let map = {}
	function helper(s,map){
		if(s in map) return map[s];
		if(s.length == 0) return true;
		for(let i = 1; i<=s.length;i++){
			if(set.has(s.slice(0,i)) && helper(s.slice(i), map)) {
				map[s] = true
				return true
			}
		}
		map[s] = false
		return false
	}

	return helper(s, map);
};
// @lc code=end

