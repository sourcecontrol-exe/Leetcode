/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {

	let res = [];
	for (let i = 0; i < 12; i++) {
		for (let j = 0; j <60; j++) {
			let h = i ? i.toString(2).match(/1/g).length : 0;
			let m = j ? j.toString(2).match(/1/g).length : 0;
			if (h + m == turnedOn) {
				
				res.push(`${i}:${j < 10 ? `0${j}` : j}`)
			}
		}
	}
	return res;
}
// @lc code=end

