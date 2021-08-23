/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, d) {
	let left = Math.max(...weights);
	let right = 0;
	weights.map(ele => right += ele)

	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2);
		if (checker(mid)) left = mid + 1
		else right = mid - 1
	}
	return left;

	function checker(mid) {
		let days = 1, total = 0;

		for (let n of weights) {
			total += n;
			if (total > mid) {
				total = n;
				days++;
			}
		}
		return days > d;
	}

};
// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// @lc code=end

