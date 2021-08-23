/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {

	/*
	Inspired by @sgrg
	Iniitially we need to figure out our serch space for binary search
	with that being said we know for the fact that that 
	the Smallest larget sum in an array will be its largets element, 
	and the largest sum will be the sum of alll elements in an array
	since array contain on ly positive integers
	this will restrain our search space for binary search for Minimal Largest Sum along these M Subarrays
	*/

	let minMax = Math.max(...nums);
	let maxMax = 0
	nums.forEach(ele => maxMax += ele);
	/*
	Now that we have purt search space we can begin searching for 
	the smallest value within this space such that we can form m 
	subarray from nums array.
	*/

	let finalresult = 0;
	/* 
	Begin searching from the mid of our search space, 
	and check if it satifies the desired outcome
	*/

	while (minMax <= maxMax) {
		let mid = minMax + Math.floor((maxMax - minMax) / 2);
		if (isPossile(mid)) {
			finalresult = mid;
			maxMax = mid - 1;
		}
		else minMax = mid + 1;
	}
	return finalresult

	/*
	function to see if X is a valid possiblity
	*/
	function isPossile(targetSum) {
		let partition = 1, sum = 0;
		for (let element of nums) {
			sum += element;
			if (sum > targetSum) {
				sum = element;
				partition++;
			}
		}
		return partition <= m
	}

};
// @lc code=end