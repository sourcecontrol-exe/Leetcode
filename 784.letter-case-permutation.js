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
var letterCasePermutation = function (s, curr = '', result = [], index = 0) {
	if(curr.length == s.length){
		result.push(curr);
		return;
	}	
	if(s[index] == s[index].toUpperCase() ){
		letterCasePermutation(s,curr+s[index].toLowerCase(),result, index+1)
	}
	else if(s[index] == s[index].toLowerCase()){
		letterCasePermutation(s,curr+s[index].toUpperCase(),result,index+1);
	}
	else {
		letterCasePermutation(s,curr+s[index],result, index+1)
	}

	return result;
};
console.log(letterCasePermutation("a1b2"));
// @lc code=end

