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

var numDecodings = function (s, i=0, memo = {}) {

	if(i in memo) return memo[i];
	if(s[i]==="0") return 0;
	if(i>= s.length-1) return 1;
	
	memo[i]= numDecodings(s,i+1, memo)+(s[i]+s[i+1]<27? numDecodings(s,i+2,memo):0)
	return memo[i];
};
/*
226
i=1


*/
// @lc code=end

