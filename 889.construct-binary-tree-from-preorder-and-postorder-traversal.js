/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {

	let pre = 0, post = 0;

	function helper(){
		let root = new TreeNode(preorder[pre++]);
		if(root.val !== postorder[post]){
			root.left = helper();
		}
		if(root.val !== postorder[post]){
			root.right = helper();
		}
		post++;
		return root
	}
	return helper();
};
// @lc code=end

