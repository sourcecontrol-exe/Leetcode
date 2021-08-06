/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

	let sorted = {}

	for (let i = 0; i < strs.length; i++) {
		let key = [...strs[i].split("")].sort((a,b)=> a.localeCompare(b)).join("")
		if(!sorted[key]) sorted[key] = [];
		sorted[key].push(strs[i])
	}
	return Object.values(sorted)

};
// console.log(groupAnagrams([""]))
// @lc code=end

