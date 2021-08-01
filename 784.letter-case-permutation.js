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

};
var letterCasePermutation = function (S,curr="", index=0,set = new Set()) {

	if(index == S.length){
		set.add(curr);
		return
	}
	if(!isNaN(S[index])) letterCasePermutation(S,curr+S[index],index+1,set)

	letterCasePermutation(S, curr+S[index].toLowerCase(),index+1,set);
	letterCasePermutation(S, curr+S[index].toUpperCase(), index+1,set);

	return [...set];
};

// @lc code=end

