/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	
    while(num.toString().length>1){
	    let temp =0; 
	    num.toString().split("").map(ele=>{
		    temp+= parseInt(ele,10);
	    })
	    num = temp
    }
    return num
};
// @lc code=end

