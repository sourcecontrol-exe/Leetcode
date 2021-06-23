/*
 * @lc app=leetcode id=877 lang=javascript
 *
 * [877] Stone Game
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
	piles.sort((a, b) => b - a);
	var val1 = 0, val2 = 0;
	while (piles.length > 0) {
		val1 += piles.shift();
		if (piles.length > 0) {
			val2 += piles.shift();
		}
	}
	return val1 > val2;

};
// @lc code=end

