/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, map=new Set()) {
	if(n == 1) return true;
	if(map.has(n)) return false;
	
	let temp = 0;

	n.toString().split("").map(ele=> temp+=Math.pow(parseInt(ele,10),2))

	map.add(n);
	return isHappy(temp,map);
};
// @lc code=end

