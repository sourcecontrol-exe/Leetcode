/*
 * @lc app=leetcode id=1980 lang=javascript
 *
 * [1980] Find Unique Binary String
 */

// @lc code=start
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {

	Number.prototype.pad = function (size) {
		var s = String(this);
		while (s.length < (size || 2)) { s = "0" + s; }
		return s;
	}

	let size = nums[0].length;
	let min = parseInt(new Array(nums.length).fill('0').join(''), 2)
	let max = parseInt(new Array(nums.length).fill('1').join(''),2);

	let arr = []
	nums.map(ele => arr.push(parseInt(ele, 2)))
	let set = new Set(arr);

	for(let i = min; i<=max; i++){
		if(!set.has(i)) return (Number(i.toString(2)).pad(size))
	}
};
// console.log(findDifferentBinaryString(["111","011","001"]))
// @lc code=end

