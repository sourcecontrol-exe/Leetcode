/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation1 = function (s, curr = '', result = new Set(), index = 0) {
	if (result.has(curr)) return;
	if (index == s.length) {
		result.add(curr);
		return;
	}
	if ((!isNaN(s[index]))) {
		letterCasePermutation(s, curr + s[index], result, index + 1)
	}
	letterCasePermutation(s, curr + s[index].toLowerCase(), result, index + 1)

	letterCasePermutation(s, curr + s[index].toUpperCase(), result, index + 1);

	return [...result];
};
var letterCasePermutation = function (S) {
	const queue = [S];
	for (let i = 0; i < S.length; i++) {
		if (!isNaN(S[i])) continue;
		const size = queue.length;
		for (let j = 0; j < size; j++) {
			const node = queue.shift();
			queue.push(node.slice(0, i) + node[i].toLowerCase() + node.slice(i + 1));
			queue.push(node.slice(0, i) + node[i].toUpperCase() + node.slice(i + 1));
		}
	}
	return queue;
};
// @lc code=end

