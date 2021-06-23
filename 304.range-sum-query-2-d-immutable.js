/*
 * @lc app=leetcode id=304 lang=javascript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	if (!matrix.length || !matrix[0].length) {
		this.sum = [[]]
		return
	}

	this.sum = new Array(matrix.length + 1).fill(0).map(val => new Array(matrix[0].length + 1).fill(0))


	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			this.sum[i + 1][j + 1] = this.sum[i][j + 1] + this.sum[i + 1][j] - this.sum[i][j] + matrix[i][j];
		}
	}
	//console.log(this.sum)

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	//return this.sumMat[row2][col2] - this.sumMat[row1][col1];
	// console.log(this.sum[row1+1][col1+1], this.sum[row2+1][col2+1]);
	// console.log(this.sum[row2+1][col2+1], this.sum[row2+1][col1], this.sum[row1][col2+1], this.sum[row1][col1]);
	return this.sum[row2 + 1][col2 + 1] - (this.sum[row2 + 1][col1] + this.sum[row1][col2 + 1] - this.sum[row1][col1])
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
// 3 3 4 8 10
// 15 21 24 26 27
// 28 30 30 31 36
