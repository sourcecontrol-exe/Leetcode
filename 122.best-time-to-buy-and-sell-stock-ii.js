/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if(prices.length < 1) return 0
	let max = 0;
	let total = 0; 
	let currmin = prices[0];
	for(let item of prices){
		max = Math.nax(max, item - currmin);
		if(item<currmin && max !==0){
			total+=max
		}
		currmin = Math.min(item, currmin);
	}
	return total; 
};
console.log(maxProfit([7,1,5,3,6,4]))
// @lc code=end

