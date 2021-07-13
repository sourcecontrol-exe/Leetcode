/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
 
	let obj = {}

	for(let items of nums){
		if(!obj[items]) obj[items]= 0;
		obj[items]++
	}

	let res = Object.keys(obj);

	res.sort((a,b)=> obj[b]-obj[a]);

	let ans = res.map(ele=> parseInt(ele))

	return res.slice(0,k).map(ele=> parseInt(ele))

};
// @lc code=end

