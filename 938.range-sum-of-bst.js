/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high, sum=0) {
	if (!root) return
	if (root.val < low) rangeSumBST(root.right, low, high, sum);
	if (root.val > high) rangeSumBST(root.left, low, high, sum);
	
		sum += root.val;
		rangeSumBST(root.left, low, high, sum);
		rangeSumBST(root.right, low, high, sum);
	
	return sum

};

// @lc code=end

