/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var palindrome = (str) => {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

var partition = function (s) {
    let result = [];
    function permutate(s, arr = []) {

        if (s.length == 1) {
            arr.push(s)
            result.push(arr)
        }
        for (var i = 1; i < s.length; i++) {
            if (palindrome(s.slice(0, i))) {
                permutate(s.slice(i), [...arr, s.slice(0, i)])
            }
        }
    }
    permutate("aab");
    return result;
};
console.log(partition("a"));

// @lc code=end

