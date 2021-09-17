/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let set = new Map()

	for (let i = 0; i < numbers.length; i++) {
		if (set.has(target - numbers[i])) return [set.get(target - numbers[i])+1, i+1];
		set.set(numbers[i], i);
	}
}
// @lc code=end