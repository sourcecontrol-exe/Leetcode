/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p, p1 = 0, p2 = 0, memo = {}) {

	let key = p1 + ":" + p2
	if (key in memo) return memo[key]

	if (p1 === s.length && p2 === p.length) return true;
	if (p1 > s.length) return false;

	let result = null;

	if (p[p2] === s[p1] || p[p2] === '.') {
		if (p[p2 + 1] === '*') result = isMatch(s,p,p1, p2 + 2, memo) || isMatch(s,p,p1 + 1, p2, memo);
		else result = isMatch(s,p,p1 + 1, p2 + 1, memo);
	} else {
		if (p[p1 + 1] === '*') result = isMatch(s,p,p1, p2 + 2,memo);
		else result = false;
	}
	memo[key] = result
	return memo[key];

};
console.log(isMatch("aab", "c*a*b"))
// @lc code=end

/*
a1 == b1 increment i
a1 != b1 && b2 !== "*" return false

*/