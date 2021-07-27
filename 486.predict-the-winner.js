/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {

	let total = 0;
	nums.map(ele => total += ele);

	

	function maxSum(i=0, j= nums.length-1, set = {}){
		let key =i+""+j
		if(key in set) return set[key];

		if(i==j) return nums[i];

		if(i>j) return Number.MAX_SAFE_INTEGER;

		set[key] = Math.max(nums[i] + Math.min(maxSum(i+2, j,set), maxSum(i+1,j-1, set)), nums[j] + Math.min(maxSum(i+1, j-1, set), maxSum(i, j-2, set)))
		return set[key]
	}

	
	return firstPlayerSum>=total-firstPlayerSum
};
// @lc code=end

