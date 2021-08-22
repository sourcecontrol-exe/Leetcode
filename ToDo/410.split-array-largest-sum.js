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
		let mid =  minMax + Math.floor((maxMax - minMax) / 2);
		if (ispossiblity(mid, m)) {
			console.log(finalresult)
			finalresult = mid
			maxMax = mid - 1;
		}
		else {
			minMax = mid + 1;
		}
		return finalresult;
	}

	/*
	function to see if X is a valid possiblity
	*/

	function ispossiblity(x, m) {
		let numberOfSubArr = 1;
		let subSum = 0
		for (let num of nums) {
			subSum += num;
			/*If currSum exceeds the required sum we create a new split*/
			if (subSum > x) {
				numberOfSubArr += 1;
				subSum = num;
			}
		}
		return numberOfSubArr <= m;
	}
};
console.log(splitArray([7,2,5,10,8],3))
// @lc code=end

