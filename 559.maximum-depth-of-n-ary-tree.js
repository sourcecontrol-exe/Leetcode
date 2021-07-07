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
var maxDepth = function (root) {

	if(!root) return 0; 
	let m = -1;
	function helper (root, Depth=1){
		m = Math.max(m , Depth);
		for(let child of root.children){
			helper(child, Depth+1)
		}
	}
	helper(root);
	return m;
	
};
// @lc code=end

