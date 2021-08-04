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
var pathSum = function (root, targetSum, currSum= targetSum) {

	if (!root) return 0;
	if(currSum==root.val) return 1;
	if (currSum < root.val) return pathSum(root.left,targetSum, targetSum) + pathSum(root.right, targetSum, targetSum);
	return pathSum(root.left,targetSum , currSum- root.val) + pathSum(root.right, targetSum, currSum-root.val);
};
// @lc code=end

