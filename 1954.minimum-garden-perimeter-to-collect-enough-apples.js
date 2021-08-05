/*
 * @lc app=leetcode id=1954 lang=javascript
 *
 * [1954] Minimum Garden Perimeter to Collect Enough Apples
 */

// @lc code=start
/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function(neededApples) {
    let n =1;

    while(2*n *(n+1)*(1+2*n) < neededApples){
	n++;
    }
    return n*8
};
// @lc code=end

