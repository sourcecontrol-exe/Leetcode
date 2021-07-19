/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2,i=0,j=0,mem={}) {
    let key = i+""+j;
    if(key in mem) return mem[key];
    if(i== text1.length || j == text2.length){
	    return 0;
    }
    if(text1[i] == text2[j]){
	   return 1 +  longestCommonSubsequence(text1,text2,i+1,j+1,mem);
    }
    mem[key] = Math.max(longestCommonSubsequence(text1,text2, i+1,j,mem), longestCommonSubsequence(text1,text2,i,j+1,mem),longestCommonSubsequence(text1,text2,i+1,j+1,mem));
    return mem[key]
};
// @lc code=end

