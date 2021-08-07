/*
 * @lc app=leetcode id=639 lang=javascript
 *
 * [639] Decode Ways II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function (s, index=0) {
	
	if(s[index] =='0') return 0;
	if(index>= s.length-1) return 1;
	
};
// @lc code=end

