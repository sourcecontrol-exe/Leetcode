/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let workingStr = s.trim().replace(/ +/g," ");
	let word = workingStr.split(' ').reverse().join(" ")
	return word;
};
// @lc code=end

