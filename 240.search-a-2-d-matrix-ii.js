/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;

	let row = 0;

	let col = matrix[0].length -1 ;

	while(col>=0 && row <= matrix.length-1){
		if(matrix[row][col] == target) return true;
		else if(matrix[row][col] > target) col--;
		else row++;
	}
	 return false;
};
// @lc code=end

