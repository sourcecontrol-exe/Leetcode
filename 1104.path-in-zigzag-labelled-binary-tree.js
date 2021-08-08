/*
 * @lc app=leetcode id=1104 lang=javascript
 *
 * [1104] Path In Zigzag Labelled Binary Tree
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {

	let res = [], node_count = 1, level = 1;

	//calculat toal number of levels 
	while (label >= node_count * 2) {
		node_count *= 2;
		level++;
	}

	let levelmax, levelmin;
	// for each level append Label 
	while (level--) {
		res.push(label);
		levelmax = 2**(level+1)-1
		levelmin = 2**level
		label = Math.floor((levelmax + levelmin - label)/2);
	}
	return res.reverse()
};
//console.log(pathInZigZagTree(26))
// @lc code=end

