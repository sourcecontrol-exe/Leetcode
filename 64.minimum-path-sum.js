/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, sum=0,m=grid.length-1,n = grid[0].length-1, set = {}) {
	let key = m+""+n
	if(key in set) return set[key]
	if(m == 0 && n == 0 ) return sum+grid[0][0]
	if(m<0 || n < 0 ) return Number.MAX_SAFE_INTEGER;
	set[key]=  Math.min(minPathSum(grid,sum+grid[m][n], m-1,n, set), minPathSum(grid,sum+grid[m][n], m,n-1,set))
	return set[key]
};
console.log(minPathSum([[1,2,5],[3,2,1]]))
// @lc code=end

