/*
 * @lc app=leetcode id=888 lang=javascript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(arr1, arr2) {
    let sum1 = 0;
    arr1.map(ele=> sum1+=ele);
    let sum2 = 0;
    arr2.map(ele=> sum2+=ele);

    let req = (sum1+sum2)/2;

    let set= new Set(arr2);

    for(let item of arr1){
	if(set.has(req - (sum1 - item)))
		return [item, req-(sum1-item)]
    }
};
// @lc code=end

