/*
 * @lc app=leetcode id=456 lang=javascript
 *
 * [456] 132 Pattern
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
	let keyvalue = []
	let temp = [...nums]
	let sorted = [...nums].sort((a,b)=> a-b);
	for (let i = 0; i < sorted.length; i++) {
		let index = temp.indexOf(sorted[i])
		temp[index] = null
		keyvalue.push([sorted[i],index])
	}
	
	

};
console.log(find132pattern([3, 5, 0, 3, 4]))

/*

 */
// @lc code=end

