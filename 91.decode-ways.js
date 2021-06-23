/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s, i=0, memo={}) {
    console.log(s[i]);
    if(i in memo) return memo[i];
    if(i>=s.length) return 1;
    if(s[i]=="0") return 0;
    memo[i] = numDecodings(s,i+1,memo) + (s[i]+s[i+1] <27? numDecodings(s,i+2,memo):0);
    return memo[i];
};
console.log(numDecodings('234'))
// @lc code=end

