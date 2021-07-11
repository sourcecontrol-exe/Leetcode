/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q, ans = null) {
	if(!root) return false;

	let l  = lowestCommonAncestor(root.left,p,q,ans);
	let r = lowestCommonAncestor(root.right,p,q,ans);
	let mid = root == q || root == p;
	if(mid+l+r >=2) return root 
	return mid||l||r;

};
// @lc code=end

