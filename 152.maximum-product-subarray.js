/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function (nums) {
    if (nums.length == 1) return nums[0];
    let dp = nums;
    for (var i = 0; i < dp.length; i++) {
        let temp = nums[i];
        let max = temp;
        for (var j = i + 1; j < dp.length; j++) {

            temp *= nums[j];
            if (max < temp) max = temp;
        }
        dp[i] = max;
    }

    let ans = Math.max(...dp);

    return ans

};
var maxProduct = function (nums) {

    if (nums.length == 1) return nums[0];

    let min = nums[0];
    let max = nums[0];
    let dp = nums[0]
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [max, min] = [min, max];
        }
        max = Math.max(nums[i], nums[i] * max);
        min = Math.min(nums[i], nums[i] * min);

        dp = Math.max(dp, max);
    }
    return dp;
};
// @lc code=end

