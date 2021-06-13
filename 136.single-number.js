/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

	let set = {}
	for (var i = 0; i < nums.length; i++) {
		if (set[nums[i]] == undefined) { set[nums[i]] = 0};
		set[nums[i]]++;
	}
	for(let key in set){
		if(set[key]%2!=0) return key;
	}

};
// @lc code=end

