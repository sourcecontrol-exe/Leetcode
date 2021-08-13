/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {

	let max = parseInt(new Array(n).fill(1).join(""), 2); 

	let ans = []
	for(let i = 0; i<=max; i++){
		ans.push(i^(i>>1))
	}
	return ans
};
// console.log(grayCode(4))
// @lc code=end

