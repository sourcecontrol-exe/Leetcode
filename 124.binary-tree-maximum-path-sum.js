/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function (root) {

	let max = Number.MIN_SAFE_INTEGER;

	function helper(node){
		if(!node) return 0; 
		let left = Math.max(helper(node.left), 0)
		let right = Math.max(helper(node.right), 0)
		max = Math.max(max, node.val + left+right);
		return Math.max(left,right)+ node.val	
	}
	helper(root)
	return max
};
// @lc code=end

