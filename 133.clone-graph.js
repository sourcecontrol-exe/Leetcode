/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, map = new Map()) {
	if (!node) return null
	if (map.has(node)) return map.get(node)
	let n = new Node(node.val)
	map.set(node, n)
	for (let k of node.neighbors) {
		n.neighbors.push(cloneGraph(k, map))
	}
	return n
};
// @lc code=end

