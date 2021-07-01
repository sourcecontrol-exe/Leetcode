/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let res = new Array(n)
	for (let i = 0; i < n; i++) {
		res[i] = new Array(n).fill(0);
	}
	let rowStart = 0, rowEnd = n - 1;
	let colStart = 0, colEnd = n - 1;
	let pointer = 1;
	while (colStart <= colEnd && rowStart <= rowEnd) {
		for (let i = colStart; i <= colEnd; i++) {
			res[rowStart][i] = pointer++;
			
		}
		rowStart++;
		for (let i = rowStart; i <= rowEnd; i++) {
			res[i][colEnd] = pointer++;
			
		}
		colEnd--;
		if (rowEnd >= rowStart) {
			for (let i = colEnd; i >= colStart; i--) {
				res[rowEnd][i] = pointer++
			}
		}
		rowEnd--
		if (colStart <= colEnd) {
			for (let i = rowEnd; i >= rowStart;i--){
				res[i][colStart] = pointer++;
			}
		}
		colStart++;
	}
	return res;
};
// @lc code=end

