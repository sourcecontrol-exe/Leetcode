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
	for (var k = 0; k < zero.length; k++) {
		for (let l = 0; l < matrix.length; l++){
			
			matrix[l][zero[k][1]] = 0
		}
		for (let m = 0; m < matrix[0].length; m++){
			
			matrix[zero[k][0]][m] = 0
		}

	}
	return matrix;
};

// @lc code=end

