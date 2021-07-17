/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let map = new Map(pairs);
    console.log(map.keys())
};
console.log(findLongestChain([[1,2],[2,3],[3,4]]))
// @lc code=end

