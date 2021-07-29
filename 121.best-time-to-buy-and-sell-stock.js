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
	
	if(prices.lenght < 1) return 0;

	let max  = 0;

	let currentmin = prices[0];
	
	for(let i =1;i< prices.length;i++){
		max = Math.max(max , prices[i] - currentmin );
		currentmin = Math.min(prices[i], currentmin)
	}
	return(max)
};
// @lc code=end

