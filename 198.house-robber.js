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

    if (nums.length < 3) {
        return Math.max(...nums);
    }

    dp[1] = Math.max(dp[0], dp[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i] + dp[i - 2]);
    }
    return dp[dp.length-1]
};
console.log(rob([2, 1, 1, 2]))

// @lc code=end

