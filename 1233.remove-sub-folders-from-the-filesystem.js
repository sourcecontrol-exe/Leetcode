/*
 * @lc app=leetcode id=1233 lang=javascript
 *
 * [1233] Remove Sub-Folders from the Filesystem
 */

// @lc code=start
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folders) {
	folders.sort();
	let res = [folders[0]];
	for (let i = 1; i < folders.length; i++) {
		let current = folders[i];
		let restop = res[res.length -1];
		let currentArr = current.split('/');
		let topArr = restop.split('/');
		if(!current.startsWith(restop) || (current.startsWith(restop) && currentArr[currentArr.length-1] !== topArr[topArr.length-1] && currentArr.length == topArr.length)){
			res.push(current);
		}
	}
	return res
};
// @lc code=end
