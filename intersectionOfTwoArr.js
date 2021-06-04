/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let result = new Set();

    for (var i = 0; i < nums2.length; i++) {
        if(set.has(nums2[i]) && !result.has(nums2[i])){
            result.add(nums2[i]);
        }
    }
    return [...result];
};
console.log(intersection([4,9,5], [9,4,9,8,4]));