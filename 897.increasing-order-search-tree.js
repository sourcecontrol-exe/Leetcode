/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
var increasingBST = function (root) {
	let list = []
	inorder(root, list);
	for (let i = 0; i < list.length; i++) {
		if (i == list.length - 1) {
			list[i].right = null;
		} else {
			list[i].right = list[i + 1]
		}

		list[i].left = null;
	}

	return list[0];
};
const inorder = (root, list) => {
	if (root == null) return
	inorder(root.left, list);
	list.push(root);
	inorder(root.right, list);
}
// @lc code=end