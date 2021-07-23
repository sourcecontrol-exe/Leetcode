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
	if (amount == 0) return 0;
	let res = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
	res[0] = 0
	for (let i = 0; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] <= i) {
				res[i] = Math.min(res[i], res[i - coins[j]] + 1)
			}
		}
	}

	return res[amount] == Number.MAX_SAFE_INTEGER? -1: res[amount] ;
};
// @lc code=end

