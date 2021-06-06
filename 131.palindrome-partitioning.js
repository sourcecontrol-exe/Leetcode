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
        if (str[left] == str[right]) return false;
        left++;
        right--;
    }
    return true;
}

const result = []

function permutate(s, arr = []) {

    if(!s.length) result.push(arr)

    for (var i = 1; i <=s.length; i++){
        if(palindrome(s.slice(0,i))){
            console.log(s.slice(0,i))
            permutate(s.slice(i), [...arr, s.slice(0,i)])
        }        
    }
}
var partition = function (s) {

    permutate("aab");

    return result;

};
console.log(partition("aab"))
// @lc code=end

