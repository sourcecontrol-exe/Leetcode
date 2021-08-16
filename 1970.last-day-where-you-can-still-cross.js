/*
 * @lc app=leetcode id=1970 lang=javascript
 *
 * [1970] Last Day Where You Can Still Cross
 */

// @lc code=start
/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {

	let grid = new Array(row).fill(0).map(ele => new Array(col).fill(0))

	let xAxis = {}
	let yAxis = {}

	for (let i = 0; i < cells.length; i++) {
		let [x, y] = cells[i]
		if (!xAxis[x-1]) xAxis[x-1] = 0
		xAxis[x-1]++
		if (!yAxis[y-1]) yAxis[y-1] = 0
		yAxis[y-1]++;

		
	}
};
console.log(latestDayToCross(3, 3, [[1, 2], [2, 1], [3, 3], [2, 2], [1, 1], [1, 3], [2, 3], [3, 2], [3, 1]]))
// @lc code=end

