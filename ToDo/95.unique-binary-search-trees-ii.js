/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * /*  */
function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}
//  
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

	if (n == 0) return [];

	let recur = function (start, end) {
		if (start > end) return [null];
		let res = [];
		for (let i = start; i <= end; i++) {

			let left = recur(start, i - 1);
			let right = recur(i + 1, end);

			for (let l of left) {
				for (let r of right) {
					let root = new TreeNode(i);
					root.left = l;
					root.right = r;
					res.push(root);
				}
			}
		}
		return res;
	}

	return recur(1, n);
};
// @lc code=end

