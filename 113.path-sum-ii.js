/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, curr = [], res = []) {

	if (!root) return [...res];
	if (!root.left && !root.right && targetSum == root.val) {
		curr.push(root.val);
		return [...res, [...curr]];
	}
	return [...pathSum(root.left, targetSum - root.val, [...curr, root.val], res),
	...pathSum(root.right, targetSum - root.val, [...curr, root.val], res)]

};
// @lc code=end

