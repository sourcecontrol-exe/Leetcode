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
	let res = [S];
	for (let i = 0; i < S.length; i++) {
		if(!isNaN(S[i])) continue;
		for(let j = 0;j< res.length ;j++){
			const node = res.shift();
			res.push(node.splice(0,i)+node[i].toLowerCase()+node.slice(i+1));
			res.push(node.splice(0,i)+node[i].toLowerCase()+node.slice(i+1));
		}
	}
	return res;
};

// @lc code=end

