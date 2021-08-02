/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

	let sarr = new Array(26).fill(0);
	let parr = new Array(26).fill(0);

	for(let i =0;i< p.length;i++){
		sarr[s.charCodeAt(i)-97]++;
		parr[p.charCodeAt(i)-97]++;
	}
	function isAnagram(sarr,parr){
		for(let i =0;i< parr.length;i++){
			if(sarr[i]!==parr[i]){
				return false
			}
		}
		return true
	}

	let result = []
	for(let i =0;i< s.length;i++){
		if(isAnagram(sarr,parr)){
			result.push(i);
		}
		sarr[s.charCodeAt(i)-97]--;
		sarr[s.charCodeAt(i+p.length)-97]++;
	}
	return result
};
// @lc code=end
