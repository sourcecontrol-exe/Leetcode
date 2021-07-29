/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices, currmin = prices.length-2, max = prices.length-1,count=2) {

	if(max< 0 || count ==0) return 0;

	if(prices[max] < prices[currmin]) return maxProfit(prices, currmin-1,max,count)

	let include = prices[max] - prices[currmin]  + maxProfit(prices,currmin-1,max-1, count-1)
	let exclude = maxProfit(prices, currmin-1, max, count)
	 return Math.max(include, exclude)
};
console.log(maxProfit([3,3,5,0,0,3,1,4]))
// @lc code=end

