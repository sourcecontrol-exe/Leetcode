/*
 * @lc app=leetcode id=1945 lang=javascript
 *
 * [1945] Sum of Digits of String After Convert
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
	if(s== '') return 0;
	let arr = "";
	s.split("").forEach((ele, index) => {
		arr+=(s.charCodeAt(index) - 96).toString()
	})
	while(k--){
		let num = 0;
		arr.split("").map(ele=> num+=parseInt(ele));
		arr = num.toString();
	}
	return arr
};
//console.log(getLucky("zbax", 2))
// @lc code=end

