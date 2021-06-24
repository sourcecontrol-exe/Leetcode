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
var islandPerimeter = function (grid) {

    let perimeter = 0;
    let neighbour = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 1){
                perimeter++;
                if(i< grid.length-1 && grid[i+1][j]) neighbour++;
                if(j<grid[i].length-1 && grid[i][j+1])  neighbour++;
            }
        }
    }
    return 4*perimeter - 2*neighbour
};
// @lc code=end

