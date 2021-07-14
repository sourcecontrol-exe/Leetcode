/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let parted = false;
	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			let min = Infinity
			let minIndex;
			for (let j = i + 1; j < nums.length; j++) {
				if (nums[j] - nums[i] > 0 && nums[j] - nums[i] < min) {
					min = nums[j] - nums[i];
					minIndex = j;
				}
			}
			let temp = nums[i];
			nums[i] = nums[minIndex];
			nums[minIndex] = temp;
			let arr = nums.splice(i + 1);
			arr.sort((a, b) => a - b);
			nums.splice(i + 1, 0, ...arr);
			parted = true;
			break;
		}
	}
	if (!parted) {
		nums.sort((a, b) => a - b);
	}
	return nums
};
// @lc code=end

