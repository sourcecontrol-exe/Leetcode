/*
 * @lc app=leetcode id=1552 lang=javascript
 *
 * [1552] Magnetic Force Between Two Balls
 */

// @lc code=start
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
/*
* sort the array
* binary search
*  
*/
var maxDistance = function (position, m) {

	position.sort((a, b) => a - b);

	let left = 0;
	let right = position[position.length - 1];
	while (left <=right) {
		let mid = left + Math.floor((right - left) / 2);
		if (ifRerquiredPosition(mid)) left = mid+1
		else right = mid - 1
	}
	return left-1;

	function ifRerquiredPosition(mid) {
		let balls = 1;
		let last = position[0];
		for (let i = 1; i < position.length; i++) {
			if (position[i] - last >= mid) {
				last = position[i];
				balls++
			}
		}
		return balls >= m
	}

};
// @lc code=end

