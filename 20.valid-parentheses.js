/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if(s.length%2 !== 0 ) return false

	let stack = [];
	for (var i = 0 ;i<s.length;i++){
		if(s[i] == "]" && stack[stack.length-1] == "["){
			stack.pop();
		}
		else if(s[i] == "}" && stack[stack.length-1] =="{"){
			stack.pop()
		}
		else if(s[i] == ")" && stack[stack.length-1] =="("){
			stack.pop()
		}
		else if(s[i] == '[' || s[i]=="{" || s[i] == "("){
			stack.push(s[i]);
		}
		else{
			return false;
		}
	} 
	return stack.length == 0? true: false;
};
// @lc code=end

