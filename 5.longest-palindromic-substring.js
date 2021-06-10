/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

function isPalindrom(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
var longestPalindrome = function (s) {
    if(s.length==0) return "";

    if(s.length ==1)return s[0]
    let max = '';

    
    for (var i = 0; i < s.length - 1; i++) {
        for (var j = s.length-1; j >=i; j--) {
            if(isPalindrom(s.slice(i,j+1))){
                if(s.slice(i,j+1).length > max.length){
                    max = s.slice(i,j+1)
                }
            }
        }
    }
    return max
};
// @lc code=end

