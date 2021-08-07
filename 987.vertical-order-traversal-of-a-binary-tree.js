/*
 * @lc app=leetcode id=987 lang=javascript
 *
 * [987] Vertical Order Traversal of a Binary Tree
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {

	let queue = [[root, 0]];
	let res = {}

	while (queue.length) {

		let n = queue.length;
		let temp = {}

		for (let i = 0; i < n; i++) {

			let [node, index] = queue.shift();

			if (!temp[index]) temp[index] = [];

			temp[index].push(node.val)

			if (node.right) queue.push([node.right, index + 1]);

			if (node.left) queue.push([node.left, index - 1]);

		}
		for(let key in temp){
			temp[key].sort((a,b)=> a-b);
			if(res[key]){
				
				res[key] = [...res[key],...temp[key]]
			}
			else{
				res[key] = temp[key]
			}
		}
	}

	let ans = []
	Object.entries(res).sort((a, b) => parseInt(a[0] - parseInt(b[0]))).map(ele=> ans.push(ele[1]))
	return ans
};
// @lc code=end

