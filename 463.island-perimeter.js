/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
   let perimeter = 0
    for (let row = 0; row < nums.length; row++) {
        for (let col = 0; col < nums[i].length; col++) {
            if (nums[row][col] === 1) {
                perimeter+=4;

		if (row > 0 && grid[row - 1][col]) perimeter--;
		if (col > 0 && grid[row][col - 1]) perimeter--;
		if (row < rows - 1 && grid[row + 1][col]) perimeter--;
		

            }
        }
    }

    return perimeter 
};
// @lc code=end

