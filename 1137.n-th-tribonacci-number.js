/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n,set={}) {
	if(n in set) return set[n];
	if(n == 0) return 0
	if(n ==1 || n == 2) return 1

	set[n] = tribonacci(n-1, set)+tribonacci(n-2,set)+tribonacci(n-3,set);
	return set[n];
};
// @lc code=end

