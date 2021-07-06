/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

	let res = [];

	function helper(curr = [], index = 1) {
		if (curr.length == k) {
			res.push([...curr]);
			return;
		}
		for (let i = index; i <=n; i++) {
			curr.push(i);
			helper(curr, i+1);
			curr.pop()
		}
	}
	helper();
	return res;

};
// @lc code=end

/*
1 2 3 4
1
*/