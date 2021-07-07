/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root, depth = 1, max = 0) {
	if (!root) return depth;
	if (root.children) {
		for (let child of root) {
			max = Math.max(maxDepth(child, depth + 1, max), max);
		}
	}
	return max
};
// @lc code=end

