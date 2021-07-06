/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
   
	let res = [];

	function helper(i,curr=''){
			 if(i == digits.length){
				res.push(curr);
				return;
			 }
			 let letter = set[digits]
			 for(let j =0;j<letter.length;j++){
				helper (i+1, curr+letter[j])
			 }

		}

	for(let i =0;i <digits.length;i++){
		if(digit=="") return;
		helper(0);
		return result ; 
	}
};
// @lc code=end

