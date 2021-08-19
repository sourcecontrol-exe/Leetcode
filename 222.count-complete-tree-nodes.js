/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function(node) {
 
	let start = node;
	let left_h = 0
	let right_h = 0;

	while(start){
		left_h++;
		start = start.left
	}
	start = node
	while(start){
		right_h++;
		start= start.right_h
	}
	if(left_h == right_h) return (2**left_h)-1
	else return 1+countNodes(node.left)+countNodes(node.right);
};
// @lc code=end

