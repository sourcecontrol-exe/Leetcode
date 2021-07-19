/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
/*

 8 2 4 7
 max 8
 min 2

 */
var longestSubarray = function (nums, limit) {
	let minArr = [], maxArr = [];
	let start = 0, end;

	for (end = 0; end < nums.length; end++) {
		while (maxArr.length && nums[end] > maxArr[maxArr.length - 1]) maxArr.pop();
		while (minArr.length && nums[end] < minArr[minArr.length - 1]) minArr.pop();
		maxArr.push(nums[end]);
		minArr.push(nums[end]);
		console.log(maxArr, minArr)
		if (maxArr[0] - minArr[0] > limit) {
			if (maxArr[0] == nums[start]) maxArr.shift();
			if (maxArr[0] == nums[start]) minArr.shift();
			start++;
		}
	}
	return end - start;
};
console.log(longestSubarray([8,2,4,7],4))
// @lc code=end

