/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
   const result = Array(T.length).fill(0);
    const stack = [];
    
    for(let i = 0; i < T.length; i++) {
        let top = stack[stack.length-1];
        
        while(stack.length && T[top] < T[i]) {
            const idx = stack.pop();
            result[idx] = i - idx;
            top = stack[stack.length-1];
        }
        stack.push(i);
    }
    return result; 
};
// @lc code=end

