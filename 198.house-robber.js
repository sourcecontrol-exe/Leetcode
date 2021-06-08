/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = nums;

    for (let index = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i-1], nums[i]+nums[i-2]);
    }
    console.log(dp)
};

console.log(rob([1, 2, 3, 1]))
// @lc code=end

