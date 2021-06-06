/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 * 
 * recurrance relation N**N = N**(N/2 x 2) = N**(N/2) x N**(N/2)
 */
 

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    
    if(n< 0){
        x = 1/x;
        n = -n;
    }
    function pow(x,n){
        if(n ==0) return 1.0;
        const half = pow(x, parseInt(n/2));

        if(n%2 ==0){
            return half*half
        }
        else return half*half*x;

    }
     return pow(x,n)
};
// @lc code=end
