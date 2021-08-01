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

	let islandID = 2;

	let dfs = (i, j) => {
		if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] !== 1) return 0
		grid[i][j] = islandID
		return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
	}

	let islandCount = 0;
	let max = 0;
	let map = new Map() // key is the island id and value is the total island count for that identifier

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				islandCount = dfs(i, j)
				map.set(islandID++, islandCount)
			}
		}
	}

	let sum  = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if(grid[i][j] == 0){
				let set = new Set()
				sum = 0;
				if(i>0 && grid[i-1][j] > 0) set.add(grid[i-1][j]);
				if(i<grid.length-1 && grid[i+1][j] !== 0) set.add(grid[i+1][j]);
				if(j>0 && grid[i][j-1] > 0) set.add(grid[i][j-1]);
				if(j<grid[0].length-1 && grid[i][j+1] !== 0) set.add(grid[i][j+1]);
				for(let item of [...set]){
					sum+=map.get(item)
				}
				max = Math.max(max, sum+1);
			}
		}
	}
	if(max == 0 && map.size>0){
		return map.values().next().value
	}
	return max

};
// @lc code=end

