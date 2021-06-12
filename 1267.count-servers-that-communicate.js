/*
 * @lc app=leetcode id=1267 lang=javascript
 *
 * [1267] Count Servers that Communicate
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */


var countServers = function (grid) {
	let r = grid.length;
	let col = grid[0].length;
	let colCount = new Array(col).fill(0);
	let rowCount = new Array(r).fill(0);

	let ans =0;
	for (let i = 0; i < r; i++) {
		for (var j = 0; j < col; j++) {
			if (grid[i][j]) {
				colCount[j]++, rowCount[i]++;
			}
		}
	}
	for (let i=0; i < r; i++) {
		for (let j =0 ; j< col;j++){
			if( grid[i][j] && (colCount[j] > 1 || rowCount[i] >1) ){
				ans++;
			}
		}
	}
	return ans
};
// @lc code=end

