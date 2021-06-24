/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */




var maxAreaOfIsland = function (grid, max = 0, temp=0) {

	function helper (i,j){
		if(i>=grid.length || j>=grid[0].length || j<0 || i<0 || grid[i][j]==0) return 0;
		grid[i][j] = 0;
		return 1+helper(i+1,j)+helper(i,j+1)+helper(i-1,j)+helper(i,j-1);
		
	}

	for(let i =grid.length-1;i>=0;i--){
		for(let j = grid[0].length-1;j>=0;j--){
			if(grid[i][j]){
				temp = helper(i,j);
				max = Math.max(temp, max);
			}
		}
	}
	return max;
};
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))
// @lc code=end

