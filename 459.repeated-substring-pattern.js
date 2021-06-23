/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	let set = new Set();
	for (var i = 1; i < s.length + 1; i++) {
		let slice = s.slice(0, i)
		if (s.length % slice.length == 0 && s == slice.repeat(s.length/slice.length) && s.length !== slice.length) {
			
			return true
		}
	}
	return false;
};

// @lc code=end

