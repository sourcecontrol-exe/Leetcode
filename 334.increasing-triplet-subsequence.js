/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first, second;
    for(let item of nums){
        if(item > second) return true;
        else if(item> first) second = item;
        else first = item
    }
    return false;
};
// 9 1 2 3 0
// @lc code=end