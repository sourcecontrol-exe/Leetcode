/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function (s, i=0) {

	if(s[i]=="0") return 0;

	if(i>= s.length-1) return 1;
	return numDecodings(s, i+1) + (s[i]+s[i+1] < 27 ? numDecodings(s,i+2) : 0);
};
/*
226
i=1


*/
// @lc code=end

