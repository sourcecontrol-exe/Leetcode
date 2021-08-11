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
var pathSum = function (root, targetSum, curr = [], res =[]) {

	if(!root) return;
	if(targetSum<0) return;
	if(targetSum == root.val) {
		curr.push(root.val);
		res=[...res,[...curr]]
		return
	}
	pathSum(root.left,targetSum-root.val,[...curr,root.val], res)
	pathSum(root.right,)

};
/*
 [5,4,8,11,null,13,4,7,2,null,null,5,1],
     

*/
// @lc code=end

