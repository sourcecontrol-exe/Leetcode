/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, set = {}) {
	let key = m + "," + n;
	if (key in set) return set[key]
	if (m == 1 || n == 1) return 1;
	if (m < 0 || n < 0) return 0;
	set[key] = uniquePaths(n - 1, m, set) + uniquePaths(n, m - 1, set);
	return set[key]
};
// @lc code=end

