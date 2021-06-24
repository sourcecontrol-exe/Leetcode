/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let num =0;

	var helper = function(i,j){
		if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j]==0) return;
		grid[i][j] = 0;
		return helper(i-1,j)+helper(i,j-1)+helper(i+1,j)+helper(i,j+1);
	}

	for(let i =0;i<grid.length;i++){
		for(let j =0;j<grid[i].length ; j++){
			if(grid[i][j] == 1){
				helper(i,j);
				num++;
			}
		}
	}
  
	return num
};
// @lc code=end