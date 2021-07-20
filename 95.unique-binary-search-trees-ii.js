/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

	function helper(start, end) {
		if (start > end) return [null];

		let res = [];

		for (let i = start; i <= end; i++) {

			let left = helper(start, i - 1);
			let right = helper(i + 1, end);

			for (let l of left) {
				for (let r of right) {
					let node = new TreeNode(i);
					node.left = l;
					node.right = r;
					res.push(node);
				}
			}
		}
		return res
	}
	return helper(1, n)
};
// @lc code=end

