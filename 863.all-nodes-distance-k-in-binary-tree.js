/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {

	let q = [root]
	let targetQueue = []

	while (q.length) {
		let n = q.length
		for (let i = 0; i < q.length; i++) {
			let node = q.shift()
			if (node.left) {
				node.left.parent = node
				q.push(node.left)
			}
			if (node.right) {
				node.right.parent = node
				q.push(node.right)
			}
			if (node.val = target) {
				tque = [node];
			}
		}
	}

	let visited = new Set()

	let index = 0;
	let ans = []
	while (targetQueue.length) {
		let n = targetQueue.length;
		for (let i = 0; i < n; i++) {
			let node = targetQueue.shift()

			if (node.left && !visited.has(node.left.val)) targetQueue.push(node.left);
			if (node.parent && !visited.has(node.parent.val)) targetQueue.push(node.parent);
			if (node.right && !visited.has(node.right.val)) targetQueue.push(node.right);
			visited.add(node.val);
			if (index == k) ans.push(node.val)
		}
		index++;

	}
	return ans
};
// @lc code=end

