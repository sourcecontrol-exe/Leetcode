/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	
	if(s.length<=1) return s.length;

	let stack = [];
	let max = 0, temp =0;
	for(element of s){
		let index = stack.indexOf(element);
		if(index<0){
			stack.push(element);
		}
		else{
			stack = stack.slice(index+1);
			stack.push(element);
		}
		
		temp = stack.length;
		max = Math.max(max,temp);
	}
	 return(max);
};
// @lc code=end

