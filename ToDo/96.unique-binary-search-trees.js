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
var numTrees = function(n) {
   function fibonacci(n, set={}){
	   if(n in set) return set[n]
	   if(n<=2) return n;
	   set[n]= n*fibonacci(n-1);
	   return set[n]
   } 
 
  return fibonacci( 2 * n ) / ( fibonacci( n + 1 ) * fibonacci( n ) );
};
// @lc code=end

