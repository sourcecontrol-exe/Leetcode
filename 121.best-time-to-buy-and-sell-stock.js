/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length < 1) return 0;

	let curMin = prices[0];
	let ans = 0;
	for (var i = 0; i <prices.length ; i++){
		ans = Math.max(prices[i] - curMin, ans);
		curMin = Math.min(curMin, prices[i]);
	}
	return ans
};
// @lc code=end

