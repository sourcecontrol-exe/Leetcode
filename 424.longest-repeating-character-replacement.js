/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let left = 0, right = 0;
	let set = {};
	let max = 0;

	while (right < s.length) {
		let char = s[right];
		if (!set[char]) set[char] = 0
		set[char]++;
		if (set[char] > max) max = set[char]
		if (right - left + 1 - max > k) {
			set[s[left]]--;
			left++;
		}
		right++
	}
	return right - left;
};
// @lc code=end

