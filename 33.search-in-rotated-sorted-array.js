/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	function findmin() {
		let left = 0, right = nums.length - 1;

		while (left < right) {
			let mid = left + Math.floor((right - left) / 2);
			if (nums[mid] < nums[left]) left = mid + 1
			else right = mid
		}
		return left
	}
	let minIndex = findmin()
	if (nums[minIndex] == target) return minIndex
	let start = target <= nums[nums.length - 1] ? minIndex : 0;
	let end = target >= num[0] ? minIndex - 1 : nums.length - 1;

	while (start < end) {
		let mid = left + Math.floor((right - left) / 2);
		if (nums[mid] < nums[left]) left = mid + 1
		else right = mid
	}
};
console.log(search([4, 5, 6, 7, 1, 2]))
// @lc code=end

