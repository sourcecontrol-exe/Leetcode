/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return res.toString(2);
};
// @lc code=end

