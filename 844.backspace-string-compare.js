/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	function removeBackspace(word){
		let stack = []
		for(let i =0;i<word.length;i++){
			if(word[i]=="#" && stack.length){
				stack.pop()
			}
			else if(word[i]!=="#"){
				stack.push(word[i])
			}
		}
		return stack.join('');
	}
	if(removeBackspace(s) == removeBackspace(t)) return true
	else return false;
};
// @lc code=end

