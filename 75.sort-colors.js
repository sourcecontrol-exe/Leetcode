/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const pivot = (arr, start = 0, end = arr.length + 1) => {
	const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

	let pivot = arr[start],
		pointer = start;

	for (let i = start; i < arr.length; i++) {
		if (arr[i] < pivot) {
			pointer++;
			swap(arr, pointer, i);
		}
	};
	swap(arr, start, pointer);

	return pointer;
}
var sortColors = function (arr, start = 0, end = arr.length) {
	let pivotIndex = pivot(arr, start, end);

	if (start >= end) return arr;
	sortColors(arr, start, pivotIndex);
	sortColors(arr, pivotIndex + 1, end);

	return arr.splice(arr.length-1,1);
};
// @lc code=end

