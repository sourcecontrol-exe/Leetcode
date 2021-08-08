/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if(!root) return null

	let que = [root]
	
	while(que.length){
		let n = que.length
		for(let i =0;i<n;i++){
			let node = que.shift();
			
			
			if(node.left){
				que.push(node.left)

			}
			if(node.right){
				que.push(node.right);
			}
			[node.left, node.right] = [node.right, node.left]
		}

	}
	return root
};
// @lc code=end

