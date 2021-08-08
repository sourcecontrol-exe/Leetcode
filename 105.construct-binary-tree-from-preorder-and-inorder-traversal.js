/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	let hash ={}
	inorder.forEach((ele,index)=> {
		hash[ele] = index;
	})
	let p = 0;
	let rec = (start, end) => {
		if(start> end) return null;
		let root = new TreeNode(preorder[p++]);
		root.left = rec(start,hash[root.val]-1);
		root.right = rec(hash[root.val]+1, end);
		return root;
	}

	return rec(0,inorder.length-1);
};
// @lc code=end

