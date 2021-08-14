/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0
	for (let i = 0; i < coins.length; i++) {
		for (let j = coins[i]; j < dp.length; j += coins[i]) {
			dp[j] = Math.min(dp[j], dp[j - coins[i]]+1)
		}
	}
	console.log(dp)
};
console.log(coinChange([1,2,5], 11))
// @lc code=end

