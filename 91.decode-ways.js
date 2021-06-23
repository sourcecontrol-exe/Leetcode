/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
<<<<<<< HEAD

var numDecodings = function(s, i=0, memo={}) {
    console.log(s[i]);
    if(i in memo) return memo[i];
    if(i>=s.length) return 1;
    if(s[i]=="0") return 0;
    memo[i] = numDecodings(s,i+1,memo) + (s[i]+s[i+1] <27? numDecodings(s,i+2,memo):0);
    return memo[i];
};
console.log(numDecodings('234'))
=======
var numDecodings = function (s) {

	let set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'])



};
console.log(numDecodings("asd"));
/*
226
i=1


*/
>>>>>>> 2b57bb7af93a0fbaebd82bed0b90716c96a7f101
// @lc code=end

