/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {

	let l = 0, r = nums.length;

	while (l < r) {
		let mid = l + Math.floor((r - l) / 2);
		if (nums[mid] >= target) r = mid - 1
		else l = mid + 1
	}

	let p = l;

	console.log(nums[l])

	if (nums[p] !== target) return [-1, -1];

	while (l < r) {

		let mid = l + Math.floor((r - l) / 2)

		if (nums[mid] <= target) l = mid + 1

		else r = mid - 1;
	}

	console.log([p, l])
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 1))
// @lc code=end
