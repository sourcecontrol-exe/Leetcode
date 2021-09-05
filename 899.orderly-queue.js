/*
 * @lc app=leetcode id=899 lang=javascript
 *
 * [899] Orderly Queue
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
	return s.split("").sort((a, b) => a.localeCompare(b))
};
console.log(orderlyQueue("cba",1))
// @lc code=end

