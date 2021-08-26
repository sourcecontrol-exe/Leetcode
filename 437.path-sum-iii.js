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
	/* 
	three layer dfs
	first to traverse through the tree
	sec to seek possiblity for each sub tree
	*/

	// let count = 0;
	// function dfs1(root, targetSum){
	// 	if(!root) return;
	// 	dfs2(root,targetSum);
	// 	dfs1(root.left, targetSum);
	// 	dfs1(root.right, targetSum);
	// }

	// function dfs2(root, targetSum){
	// 	if(!root) return;
	// 	if(root.val === targetSum) count++;
	// 	dfs2(root.left, targetSum - root.val);
	// 	dfs2(root.right, targetSum - root.val);
	// }
	// dfs1(root, targetSum);
	// return count;

	let total = 0; 
	let cache = {'0':1};
	function helper(node, sum){
		if(!node) return; 
		sum+=node.val;
		if(cache[sum - targetSum]) total+= cache[sum - targetSum];
		if(!cache[sum]) cache[sum] = 0
		cache[sum]+=1;

		helper(node.left,sum)
		helper(node.right, sum)
		cache[sum]-=1
	}
	helper(root,0);
	return total;

};
/*
 [5,4,8,11,null,13,4,7,2,null,null,5,1],
*/
// @lc code=end