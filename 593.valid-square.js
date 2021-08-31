/*
 * @lc app=leetcode id=593 lang=javascript
 *
 * [593] Valid Square
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {

	function findDist(i, j) {
		const [x1, y1] = i;
		const [x2, y2] = j;
		return (x2 - x1) ** 2 + (y2 - y1) ** 2
	}

	const pt = [p1, p2, p3, p4].sort(([ax, ay], [bx, by]) => ax == bx ? ay - by : ax - bx)

	const side1 = findDist(pt[0], pt[1]);
	const side2 = findDist(pt[0], pt[2]);
	const side3 = findDist(pt[3], pt[1]);
	const side4 = findDist(pt[3], pt[2]);
	const diag1 = findDist(pt[0], pt[3]);
	const diag2 = findDist(pt[1], pt[2]);

	return side1 && diag1 && side1 == side2 && side2 == side3 && side3 == side4 && diag1 == diag2;
};
// @lc code=end

