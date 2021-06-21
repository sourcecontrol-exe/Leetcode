/*
 * @lc app=leetcode id=1043 lang=javascript
 *
 * [1043] Partition Array for Maximum Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(nums, K) {
   const n = nums.length;
  //  dp(i) = the max sum of the first i numbers.
  const dp = Array(n + 1);
  
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    dp[i] = sum;
    sum += nums[i];
  }
  
  for (let i = 1; i <= n; i++) {
    let max = 0 ; 
    for(var j = 1 ;j<=K && i-j >=0;j++){
	    max = Math.max(nums[i-j], max);
	    const sum = dp[i-j] + j * max;
	    dp[i] = Math.max(sum, dp[i]);
    }
  }
  return dp[n];
};
// @lc code=end

