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
/*
max = 3 index = 1;


*/
var maxSlidingWindow = function (nums, k) {
	
	// Iterate rate from 0 to K in an array and mark mark Maxelement and 
	// index of the max element

	if(nums.length ==1 || k ==1) return nums;
	let currmax = Number.MIN_SAFE_INTEGER;
	let maxIndex = 0;
	for (let i = 0; i < k; i++) {
		if (nums[i] > currmax) {
			currmax = nums[i];
			maxIndex = i
		}
	}
	// push th max element in the result array
	let res = [currmax];
	
	// iterate from index 1 since we have already calculated our first max for First 
	// 0 to K elements of nums array

	for (let i = 1; i <= nums.length - k; i++) {
		
		// check if the index of max element is less than the current index value 
		// which suggests we need to find new max and new index of the max element
		
		if (maxIndex < i) {
			currmax = Number.MIN_SAFE_INTEGER;
			for (let j = i; j < i + k; j++) {
				if (currmax < nums[j]) {
					currmax = nums[j];
					maxIndex = j;
				}
			}
		}

		// second check to see if the incomming element in the window is greater than the current Max
		// we have 

		if (currmax < nums[i + k - 1]) {
			currmax = nums[i + k - 1];
			maxIndex = i;
		}
		res.push(currmax);
	}
	return res;

};
// console.log(maxSlidingWindow([4,-2], 2));
// 5 5
// @lc code=end