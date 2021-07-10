/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/*
a b c d
 abcd abc ab
      bcd bc
	  cd
*/
var checkSubarraySum = function (nums, k) {


}
var checkSubarraySum = function (nums, k) {

	let sum = 0
	
	let prefix = 0;
	
	const hash = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		console.log(sum)
		sum += nums[i]

		if (k != 0) sum %= k

		if(hash.has(sum)) return true

		hash.add(prefix);
		prefix = sum;
	}
	return false
};
console.log(checkSubarraySum([1,2,3], 2))
// @lc code=end