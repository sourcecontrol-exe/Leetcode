/*
 * @lc app=leetcode id=1646 lang=javascript
 *
 * [1646] Get Maximum in Generated Array
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
	if(n<1) return 0 
	let dp = new Array(n).fill(0);
	 dp[1] = 1;
	 let max = dp[1]
	 for(let i = 2;i<=n;i++){
		if(i%2== 0) dp[i] = dp[i/2]
		else {
			let t = (i-1)/2
			dp[i] = dp[t]+dp[t+1]
		} 
		max = Math.max(max, dp[i])
	 }
	 return max
};
// @lc code=end

