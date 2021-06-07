/*
 * @lc app=leetcode id=1863 lang=javascript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {

    function fork(i, t) {
        if (i === nums.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([nums[i]]));
        fork(i + 1, t);
    }
    var result = [];
    fork(0, []);
    let sum = 0;
    for (var i = 0; i < result.length; i++){
       let temp=0
       result[i].forEach(ele=>{
           temp^=ele;
       })
       sum+=temp;
    }
    return sum
};
// @lc code=end
