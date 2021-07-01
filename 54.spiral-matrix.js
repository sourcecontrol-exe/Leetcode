/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

	let res = [];

	let rowStart = 0, rowEnd = matrix.length - 1;
	let colStart = 0, colEnd = matrix[0].length - 1;

	while (rowStart <= rowEnd && colStart <= colEnd) {
		for (let i = colStart; i <= colEnd; i++) {
			res.push(matrix[rowStart][i]);
		}
		rowStart++;
		for (let i = rowStart; i <= rowEnd; i++) {
			res.push(matrix[i][colEnd])
		}
		colEnd--;
		if (rowEnd >= rowStart) {
			for (let i = colEnd; i >= colStart; i--) {
				res.push(matrix[rowEnd][i])
			}
		}
		rowEnd--
		if (colStart <= colEnd) {
			for (let i = rowEnd; i >= rowStart;i--){
				res.push(matrix[i][colStart]);
			}
		}
		colStart++;
	}

	return res;
};
// @lc code=end

