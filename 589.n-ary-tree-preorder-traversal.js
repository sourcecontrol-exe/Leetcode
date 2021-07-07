/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, res = []) {
	if (!root) return res;
	res.push(root.val);
	for (let chid of root.children) {
		preorder(chid, res);
	}
	return res
};
// @lc code=end

