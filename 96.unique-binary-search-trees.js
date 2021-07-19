/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/* 
CATALAN NUMBER = 2N! / (N+1)!* N!
 */
var numTrees = function(n, set ={}, c = n) {
    if(c in set) return set[c];
    if(c == 0 || c==1) return 1;
    
    let sum = 0;
    for(let i =0;i<c;i++){
	    sum+= numTrees(n,set,i)*numTrees(n,set,c-i-1);
    }
    set[c] = sum;
    return sum
};
// @lc code=end

