/*
 * @lc app=leetcode id=1839 lang=javascript
 *
 * [1839] Longest Substring Of All Vowels in Order
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
	let max = 0;
	for (let i = 0; i < word.length; i++) {
		let [j, s] = [i, new Set(word[i])];
		while (word[j] <= word[j + 1]) s.add(word[++j]);
		if (5 === s.size) max = Math.max(max, j - i + 1);
		i = j;
	}
	return max

};
// @lc code=end

