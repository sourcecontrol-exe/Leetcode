/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l =0, r = nums.length; 
    
    while(l< r){
	    let m = l + Math.floor((l+r)/2);
	    if(nums[m]<target) l = m+1
	    else r = m+1
    }
    console.log(l)
};
console.log(searchRange([5,7,7,8,8,10], 8));
// @lc code=end