/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
var widthOfBinaryTree = function(root) {
	if(!root) return 0; 

	let max = 0;
	let queue =[root]
	while(queue.length){
		let n = queue.length;
		let curr = []
		for(let i =0;i< n;i++){
			let currItem = queue.shift()
			curr.push(currItem)
			queue.push(currItem.left|| null)
			if(currItem.right)queue.push(currItem.right)
			if(max<curr.length) max= curr.length
		}
	}
  
	return max
};
// @lc code=end

