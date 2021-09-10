/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
	const freq = Array(26).fill(0);
	const stack = [];

	for (let c of s) {
		const idx = c.charCodeAt() - 'a'.charCodeAt();
		freq[idx]++;
	}
	for (let c of s) {

		const idx = c.charCodeAt() - 'a'.charCodeAt();

		freq[idx]--;

		if (stack.includes(c)) continue;

		while (stack.length) {

			let lastChar = stack[stack.length - 1];

			let lastCharIdx = lastChar.charCodeAt() - 'a'.charCodeAt();

			if (freq[lastCharIdx] && lastChar > c) stack.pop();

			else break;
		}
		stack.push(c);
	}
	return 
};
console.log(removeDuplicateLetters("cbacdcbc"))
// @lc code=end

