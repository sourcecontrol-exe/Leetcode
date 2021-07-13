/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	nums.sort((a,b)=> a-b);

	let currmax = 0;
	let max = 0
	let maxnum =0
	for(let i = 1 ;i<nums.length;i++){
		if(arr[i-1] == arr[i]){
			currmax++;
			if(max<currmax) {
				max = currmax
				maxnum = arr[i]
			}
		}
		else currmax=0
	}
	console.log (maxnum)
};
// @lc code=end

