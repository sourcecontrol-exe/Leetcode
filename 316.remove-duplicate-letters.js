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

	let freq = new Array(26).fill(0);

	for (let c of s) {
		freq[c.charCodeAt() - 'a'.charCodeAt()]++;
	}

	let stack = [];

	for (let c of s) {
		let indx = c.charCodeAt() - 'a'.charCodeAt();
		freq[indx]--;
		if (stack.includes(c)) continue;

		while (stack.length) {
			let last = stack[stack.length - 1];
			let lastIndex = last.charCodeAt() - 'a'.charCodeAt();
			if (freq[lastIndex] && lastIndex > indx) stack.pop();
			else break;
		}
		stack.push(c);
	}
	return stack.join("");
};
// console.log(removeDuplicateLetters("cbacdcbc"))
// @lc code=end

