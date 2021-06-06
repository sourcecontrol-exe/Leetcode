/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let result = new Set();
    nums2.map(ele => {
        if(set.has(ele)){
            result.add(ele);
        }
    })
    return [...result];

};
// @lc code=end

