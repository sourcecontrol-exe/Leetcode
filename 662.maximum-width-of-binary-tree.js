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
/* 
 !important concept
 *find the difference between tw nopn zero nodes and compare with the maxwidth
*/
var widthOfBinaryTree = function (root) {
	if (!root) return 0;

	let max = 0, l = 0, r = 0;
	let queue = [[root, 0]]
	while (queue.length) {
		let n = queue.length;
		const startIdx = queue[0][1];
		for (let i = 0; i < n; i++) {
			let [curr , index] = queue.shift();
			
			if(i == 0){
				l = index;
			}
			if(i == n-1){
				r = index 
			}
			let subindex = index - startIdx
			if(curr.left) queue.push([curr.left, subindex*2+1])
			if(curr.right) queue.push([curr.right, subindex*2+2]) 
		}
		max = Math.max(r-l+1, max)
	}

	return max
};
// @lc code=end

