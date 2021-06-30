/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	
   const obj = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1   
    }
    
    let ans = '';
    
    for(const el in obj){
        if(num === 0) break;
        if(num === obj[el]){
            ans += el;
            break;
        }
        while(num >= obj[el]){
            ans += el;
            num -= obj[el];
        }
    }
    
   return ans;
};
console.log(intToRoman(923))
// @lc code=end

