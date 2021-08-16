/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function same(q,p){
	if(!p && !q) return true
	if(!p || !q || (p.val !== q.val)) return false;
	return (same(q.left,p.left)  && same(q.right, p.right))
}

var isSubtree = function(root, subRoot) {
	if(!root) return false
	if(root.val == subRoot.val && same(root,subRoot)) return true
	return( isSubtree(root.left, subRoot) || isSubtree(root.right , subRoot))
};
// @lc code=end

