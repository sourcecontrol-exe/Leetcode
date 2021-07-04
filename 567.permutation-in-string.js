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

	let permutations = [];
	let workingArr = s1.split("");

	function helper(workingArr, curr = []) {
		if(!workingArr.length){
			permutations.push(curr.join(","));
			return
		}
		let set = new Set();
		for (let i = 0; i<workingArr.length;i++){
			if(set.has(workingArr[i])) continue;
			curr+=workingArr[i];
			set.add(workingArr[i]);
			let rest = workingArr.filter((ele,index)=> index!=i);
			helper(rest, curr);
			curr.splice(curr.length-1,1);
		}
	}
	helper(workingArr)
	console.log(permutations)
};
console.log(checkInclusion('123','asd'))
// @lc code=end

