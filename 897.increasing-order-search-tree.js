/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
	if (!root) return null;
	increasingBST(root.left);
	
};
// @lc code=end

