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
	if (p.length > s.length) return []

	var compareAnagram = (a, b) => {
		if (a.length < b.length) return false
		if (a === b) return true

		let setA = {}
		let setB = {}

		for (let item of a.split("")) {
			if (!setA[item]) setA[item] = 0;
			setA[item]++
		}
		for (let item of b.split("")) {
			if (!setB[item]) setB[item] = 0;
			setB[item]++
		}

		for (let keys of Object.keys(setA)) {
			if (!setB[keys]) {
				console.log(setA[keys], setB[keys])
			}
			setB[keys] = setB[keys] - setA[keys]
		}
		// for (let values of Object.values(setB)) {
		// 	if (values !== 0) return false
		// }
		return true
	}
	let res = []
	for (let i = 0; i <= s.length - p.length; i++) {
		let substr = s.slice(i, i + p.length);
		if (compareAnagram(substr, p)) res.push(i);
	}
	return res

};
console.log(findAnagrams("abab", "ab"))
// @lc code=end

