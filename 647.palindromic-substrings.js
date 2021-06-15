/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

	let substring = 0

	function bubble(left,right){
		while(left>=0 && s[left]==s[right] && right<=s.length){
			substring++;
			left--;
			right++;
		}
	}

	for(let i =0;i<s.length;i++){
		bubble(i,i);
		bubble(i,i+1)
	}
	return substring
};
// @lc code=end

