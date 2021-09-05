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
var isMatch = function (s, p, memo = {}) {

	return check(0, 0);

	function check(p1, p2) {

		let key = p1 + ":" + p2

		if (key in memo) return memo[key];

		if (p1 > s.length) return false

		if (p1 === s.length && p2 == p.length) return true;

		if (p[p2] == '.' || s[p1] === p[p2]) {
			memo[key] = p[p2 + 1] === "*" ? (check(p1 + 1, p2) || check(p1, p2 + 2)) : check(p1 + 1, p2 + 1)
		}
		else {
			memo[key] = p[p2 + 1] === "*" ? check(p1, p2 + 2) : false
		}
		return memo[key]
	}
};
// @lc code=end

/*
a1 == b1 increment i
a1 != b1 && b2 !== "*" return false

*/