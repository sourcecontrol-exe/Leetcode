/*
 * @lc app=leetcode id=1314 lang=javascript
 *
 * [1314] Matrix Block Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
	let dp = Array(mat.length + 1);
	// set first row value as 0
	dp[0] = Array(mat[0].length + 1).fill(0);

	// fill dp table with cumulative sum from (0,0) to (i,j)
	for (let i = 0; i < mat.length; i++) {
		dp[i + 1] = [0];
		for (let j = 0; j < mat[0].length; j++) {
			dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
		}
	}

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[i].length; j++) {
			let lowerRow = Math.max(0, i - K), upperRow = Math.min(mat.length - 1, i + K);
			let lowerCol = Math.max(0, j - K), UpperCol = Math.min(mat[i].length - 1, j + K);

			mat[i][j] = dp[upperRow + 1][UpperCol + 1] - dp[lowerRow][UpperCol + 1] - dp[upperRow + 1][lowerCol] + dp[lowerRow][lowerCol];
		}
	}
	return mat

};
matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)
// @lc code=end

