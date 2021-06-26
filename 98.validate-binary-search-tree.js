/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root, temp = []) {
	function Helper (root){
		if(root.left) Helper(root.left);
		temp.push(root.val);
		if(root.right) Helper(root.right);
	}
	Helper(root);
	for(let i =1 ;i< temp.length;i++){
		if(temp[i-1] >= temp[i] ) return false;
	}
	return true;
};
// @lc code=end

