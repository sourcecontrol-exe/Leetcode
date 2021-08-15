/*
 * @lc app=leetcode id=1306 lang=javascript
 *
 * [1306] Jump Game III
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, index) {

	function dfs(arr, index) {
		if (arr[index] == 0) return true;
		if (index < 0 || index > arr.length - 1 || arr[index] < 0) return false;
		
		let Jump = arr[ index]
		arr[index] = -1;
		return (dfs(arr, index-Jump) || dfs(arr,index+Jump))
	}


	if (arr === null || arr.length === 0) {
		return false;
	}
	return dfs(arr, index);


};
// console.log(canReach([3, 0, 2, 1, 2], 2))
// @lc code=end

