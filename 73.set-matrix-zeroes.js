/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	let zero = [];
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				zero.push([i, j]);
			}
		}
	}

	return matrix;
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))

// @lc code=end

