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
var letterCasePermutation = function (s) {

	let queue = [S];

	let res = []
	while(queue.length){
		let node = queue.shift();
		res.push(node)
		for(let i = 0 ;i<node.length;i++){
			if(isNaN(node[i])){
				queue.push(S.slice(0,i-1)+node[i].toUpperCase()+S.slice(i+1))
				queue.push(S.splice(0,i)+node[i].toLowerCase(),s.slice(i+1))
			}
		}
	}
	console.log(res)
};
console.log(letterCasePermutation("A1B1"))

// @lc code=end

