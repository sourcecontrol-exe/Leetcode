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
var numDecodings = function(s, i=0) {
    if(s[i]=="0") return 0;
    if(s[i] == "*"){
	if(i==0) return 9;
	if(i>0 && s[i-1] == 1) return 
    }
};
// @lc code=end