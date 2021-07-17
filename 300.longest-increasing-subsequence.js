/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let dp = [nums[0]];

	function binaryInsert(val){
		let low =0;
		let high = dp.length-1;
		while(low<high){
			let mid = low + Math.floor((high-low)/2);
			if(val > dp[mid]){
				low = mid+1;
			}
			else{
				high = mid;
			}
		}
		return low;
	}

	for(let item of nums){
		if(item > dp[dp.length-1]) dp.push(item);
		else{
			let index = binaryInsert(item)
			dp[index] = item;
		}
	}
	return dp.length;
};
// @lc code=end

