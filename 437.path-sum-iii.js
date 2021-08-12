/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {

	let total = 0;
	let map = new Map()
	map.set(0, 1);

	function helper(node, sum) {
		let total = 0;
		let map = new Map();
		map.set(0, 1)
		function helper(node, sum) {
			if (node === null) return false;
			sum = sum + node.val;
			if (map.has(sum - targetSum)) {
				total = total + map.get(sum - targetSum)
			}
			map.set(sum, (map.get(sum) || 0) + 1)
			helper(node.left, sum);
			helper(node.right, sum);
			map.set(sum, map.get(sum) - 1)
		}
		helper(root, 0)
		return total
	}
};
/*
 [5,4,8,11,null,13,4,7,2,null,null,5,1],
*/
// @lc code=end