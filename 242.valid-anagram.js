/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	let map1 = {}
	let map2 = {}
	if(s.length !== t.length) return false
	for(let item of s){
		if(!map1[item]) map1[item] = 0
		map1[item]++;
	}
	for(let item of t){
		if(!map2[item]) map2[item] = 0
		map2[item]++;
	}
	let sum = 0;

	for(let item in map1){
		if(!map2[item]) return false;
		if(map1[item] - map2[item] !== 0) return false
	}
	if(sum!=0) return false;
	return true;
};
// @lc code=end

