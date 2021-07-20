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

	function helper(root, str = '', sum =0){
		if(!root){
			sum+= parseInt(str,10);
			str.splice(str.length-1,1);
			return
		}
		str+=root.val
		helper(root.left,str,sum)
		helper(root.right, str,sum)
		return sum
	}
	let ans = helper(root)
};
// @lc code=end

