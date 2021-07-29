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
var maxProfit = function (arr) {

	let total = 0;
	let currmin = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if(arr[i] > currmin) total+=arr[i]-currmin;
		currmin = arr[i]
	}
	return total;
};
// @lc code=end

