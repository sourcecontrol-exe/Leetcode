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

    let maxsub = '';
    function bubble(left,right){
        while(left<s.length && right>=0 && s[left]== s[right]){
            left++;
            right--;
        }
        return s.slice(left, right+1);
    }

    for(var i =0;i<s.length;i++){
        let sub1 = bubble(i,i);
        let sub2 = bubble(i,i+1);

        let sub = sub1.length>sub2.length ? sub1:sub2;
        if(sub.length > maxsub){
            maxsub = sub;
        }
    }
    return maxsub;
};
console.log(longestPalindrome("baaaabaaaa"))
// @lc code=end

