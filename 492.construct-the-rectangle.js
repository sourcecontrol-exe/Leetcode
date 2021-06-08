/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let sqr = Math.sqrt(area);

    for(var i = parseInt(sqr); i>=1;i--){
        if(area%i==0){
            return [area/i,i];
        }
    }
    return [area,1];
};

// @lc code=end

