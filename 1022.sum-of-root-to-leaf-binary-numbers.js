/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
var sumRootToLeaf = function(root) {

	function helper(root, str = ""){
		if(!root){
			return 0;
		}
		str+=root.val;
		if(!root.left && !root.right){
			return parseInt(str,2)
		}
		return helper(root.left,str) + helper(root.right,str);
	}
	let a = helper(root)
	return a;
};
// @lc code=end

