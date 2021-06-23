/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, temp = 1) {

    let left = 0;
    let right = s.length - 1;
    while (left < right) {

        if (s[left] != s[right]) {

            if (temp == 0) return false;

            else {
                temp --;
                let leftTrim = s.slice(left+1,right+1)
                let rightTrim = s.slice(left,right);
                if(validPalindrome(leftTrim,temp) || validPalindrome(rightTrim,temp)){
                    return true;
                }
                else return false
            }
        }
        left++;
        right--
    }
    return true
};
// @lc code=end

