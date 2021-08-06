/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {

	let prev = null, big = null, short = null;

	function helper(root) {
		if(!root) return

		helper(root.left);

		if(prev!==null && prev.val > root.val){
			short  = root;
			if(!big) big = prev
			else return
		}
		prev = root
		helper(root.right);
	}

	helper(root);

	[big.val,short.val] = [short.val, big.val]; 
};


// @lc code=end

