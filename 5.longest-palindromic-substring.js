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
    let maxPal = '';

    for (let i = 0; i < s.length; i++) {
        bubble(i, i); // odd palindrome
        bubble(i, i + 1); // even palindrome
    }

    function bubble(left, right) {

        while (left >= 0 && s[left] === s[right]) {
            left--;
            right++;
        }
        left++;
        right--;

        if (maxPal.length < right - left + 1) {
            maxPal = s.slice(left, right + 1)
        }
    }
    return maxPal;
};
// @lc code=end

