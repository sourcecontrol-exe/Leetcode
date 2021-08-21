/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {

	if(points.length<=1) return points.length;

	points.sort((a, b) => a[1] - b[1]);

	let res = 1
	let [start, end] = points[0];
	for (let i = 1; i < points.length; i++) {
		let [key, value] = points[i];
		if (key <= end) {
			continue;
		}
		[start, end] = points[i];
		res++;
	}
	return (res)
};
//  console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))
// @lc code=end