/*
 * @lc app=leetcode id=827 lang=javascript
 *
 * [827] Making A Large Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
	let g = grid
	let n = grid.length
	let m = g[0].length
	let res = 0;
	let sizes = [0, 0]

	const getColor = (i, j) => {
		return (i < 0 || j < 0 || i >= n || j >= m) ? 0 : g[i][j];
	};

	const paint = (i, j, color) => {
		if (i < 0 || j < 0 || i >= n || j >= m || g[i][j] !== 1) return 0
		g[i][j] = color;
		return 1 + paint(i + 1, j, color) + paint(i - 1, j, color) + paint(i, j + 1, color) + paint(i, j - 1, color);
	};

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (g[i][j] == 1) {
				let size = paint(i, j, sizes.length);
				sizes.push(size);
			}
		}
	}
	console.log(g)
	// for (let i = 0; i < n; i++) {
	// 	for (let j = 0; j < m; j++) {
	// 		if (g[i][j] == 0) {
	// 			let se = new Set([getColor(i + 1, j), getColor(i - 1, j), getColor(i, j + 1), getColor(i, j - 1)]);
	// 			console.log(se)
	// 			let newSize = 1;
	// 			for (const color of se) {
	// 				newSize += sizes[color];
	// 			}
	// 			res = Math.max(res, newSize);
	// 		}
	// 	}
	// }
	return res == 0 ? n * m : res;
};
// @lc code=end

