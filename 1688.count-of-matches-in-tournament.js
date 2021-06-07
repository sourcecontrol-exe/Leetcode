/*
 * @lc app=leetcode id=1688 lang=javascript
 *
 * [1688] Count of Matches in Tournament
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches1 = function (n, matches = 0, set= {}) {
    let key = n;
    if(key in set) return set[key];
    if (n == 2) return matches + 1;
    if (n < 2) return matches;
    if (n > 2) {
        if (n % 2 == 0) set[key] = numberOfMatches(n / 2, matches + (n / 2));
        else {
            set[key] = numberOfMatches(((n - 1) / 2) + 1, matches + ((n - 1) / 2));
        }
    }
    return set[key];
}; 
var numberOfMatches= function (n) {
    if(n<2) return 0;
    if(n==2) return 1;
    else return n-1;
}; 
console.log(numberOfMatches(56))
// @lc code=end

