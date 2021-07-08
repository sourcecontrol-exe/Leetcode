/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	if(k==1) return nums;
	let currntMax = Number.MIN_SAFE_INTEGER;
	for (let j = 0; j < k; j++) {
		if(nums[j]> currntMax) currntMax=nums[j];
	}
	let res = [currntMax];
	
	for (var i = k; i < nums.length; i++) {
		if (nums[i] > currntMax) currntMax = nums[i];
		res.push(currntMax);
	}
	return res;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],2));
//3 3 -1 5 5 6 7
// @lc code=end