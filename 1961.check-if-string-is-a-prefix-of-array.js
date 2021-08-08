/*
 * @lc app=leetcode id=1961 lang=javascript
 *
 * [1961] Check If String Is a Prefix of Array
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
	let k=0
	let temp = ""
	let p =0
	while(k<s.length && p< words.length){
		temp+=words[p];
		k+=words[p].length;
		p++
	}
	return temp==s;
};
// @lc code=end

