/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function isPalindrome(str, max) {
	let left = 0;
	let right = str.length - 1;
	while (left <= right && str[left] == str[right]){
		right--;
		left++;
	}
	if(left>right){
		max = str.length;
		return true;
	}
	return false;
}

var longestPalindromeSubseq = function (s, str = "", i = 0, max = 0) {
	if (i >= s.length) return -1;
	if(str.length !==0 && isPalindrome(str, max)){
		max<str.length? max = str.length: max;
	}
	let include = longestPalindromeSubseq(s, str + s[i], i + 1, max);
	let exclude = longestPalindromeSubseq(s, str, i + 1,max);
	include()
	exclude();
	return max;
};
console.log(longestPalindromeSubseq("bbab"));
// @lc code=end

