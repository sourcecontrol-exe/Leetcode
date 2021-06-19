/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

	let mid = Math.floor(matrix.length / 2);
	let temp;

	for (let i = 0; i < mid; i++) {
		temp = matrix[i];
		matrix[i] = matrix[matrix.length - 1 - i];
		matrix[matrix.length-1-i] = temp;
	}
	console.log(matrix);
};
console.log(rotate([[7,4,1],[8,5,2],[7,8,9]]));
// @lc code=end