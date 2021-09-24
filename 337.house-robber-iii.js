/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
 * @return {number}
 */
var rob = function (root) {
	const { current, next } = traverse(root);

	return Math.max(current, next);
};

function traverse(root) {
	
	if (!root) {
		return { current: 0, next: 0 };
	}

	const left = traverse(root.left);
	const right = traverse(root.right);
	const current = root.val + left.next + right.next;
	const next = Math.max(left.current, left.next) + Math.max(right.current, right.next);

	return { current, next };
};
// @lc code=end

