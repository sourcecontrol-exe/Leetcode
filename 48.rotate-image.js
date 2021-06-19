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
		matrix[matrix.length - 1 - i] = temp;
	}
	for (let i = 0; i < matrix.length/2; i++) {
		for (let j = i + 1; j < matrix[i].length; j++) {
			if (matrix[i][j] && matrix[j][i]) {
				let t = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = t
			}
		}
	}
	return matrix
};
console.log(rotate([[1, 2, 3], [, 4, 5, 6], [7, 8, 9]]));
// @lc code=end