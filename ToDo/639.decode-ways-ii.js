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

var numDecodings = function (s) {
	
	function Helper(i, memo = {}) {
		if (i in memo) return memo[i];
		if (s[i] == '0') return 0;
		if (i >= s.length - 1) return 1;
		memo[i] = Helper(i + 1) + (s[i] + s[i + 1] < 27 ? Helper(i + 1) : 0);
		return memo;
	}
};
// @lc code=end

