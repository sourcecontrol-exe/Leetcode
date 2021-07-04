/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	
	if (s1.length > s2.length) return false

	const set = {}

	s1.split("").forEach(ele=>{
		if(!set[ele]) set[ele] = 0;
		set[ele]++;
	})

	for (let i = 0; i <=s2.length - s1.length; i++) {
		let window = s2.slice(i,i+s1.length);
		let setcopy = {...set};
		for(let j  = window.length-1;j>=0;j--){
			if(setcopy[window[j]]) setcopy[window[j]]--
			else break;
		}
		if(Object.values(setcopy).filter(ele => ele != 0).length == 0) return true;
	}
	return false;
};
// @lc code=end

