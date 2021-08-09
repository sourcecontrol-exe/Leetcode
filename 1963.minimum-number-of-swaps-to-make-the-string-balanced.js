/*
 * @lc app=leetcode id=1963 lang=javascript
 *
 * [1963] Minimum Number of Swaps to Make the String Balanced
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let result = 0, balanced = 0;
    
    for( let i =0;i<s.length;i++){
	    balanced+= s[i] == "["? 1 : -1
	    if(balanced < 0){
		result++;
		balanced = 1
	    }
    }
 return result
};
// console.log(minSwaps(']]][[['))
// @lc code=end
