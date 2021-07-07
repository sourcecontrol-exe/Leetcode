/*
 * @lc app=leetcode id=939 lang=javascript
 *
 * [939] Minimum Area Rectangle
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
	const map = new Map()
	let minArea = Number.MAX_SAFE_INTEGER;

	for (let [x, y] of points) {
		if (!map.has(x)) map.set(x, new Set());
		map.get(x).add(y);
	}

	for (let i = 0; i < points.length -1; i++) {

		for (let j = i + 1; j < points.length; j++) {
			const [x1, y1] = points[i];
			const [x2, y2] = points[j];

			if (x1 == x2 || y1 == y2) continue;

			if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
				minArea = Math.min(minArea, (Math.abs(x1 - x2) * Math.abs(y1 - y2)));
			}
		}
	}
	return minArea === Number.MAX_SAFE_INTEGER ? 0 : minArea;
};
// @lc code=end

