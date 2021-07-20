/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	let res = []
	let arr = [nums[0]];
	function binearySearch(num) {

		let l =0;
		let h = arr.length - 1;
		while(l<h){
			let mid = l + (Math.floor(h-r)/2)
			if(arr[mid] > num){
				l = mid+1;
			}
			else{
				h = mid;
			}
		}
		return l
	}

	for(let item of nums){
		if(item > arr[arr.length-1]) arr.push(item)
		else{
			let index = binearySearch(item);
			arr[index] = item
		}
		res.push(arr)
	}
	return res;
};
console.log(findSubsequences([4,6,7,7]))
// @lc code=end

