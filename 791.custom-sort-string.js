/*
 * @lc app=leetcode id=791 lang=javascript
 *
 * [791] Custom Sort String
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
	let set = {};
	for (var i = 0; i < str.length; i++) {
		if (!set[str[i]]) set[str[i]] = 0;
		set[str[i]]++;
	}
	let res = '';
	for (let j = 0; j < order.length; j++) {
		if(set[order[j]]){
			res+=order[j].repeat(set[order[j]]);
			set[order[j]] = 0;
		}
	}

	for (let keys in set) {
		if (set[keys] !== 0) {
			res += keys.repeat(set[keys])
		}
	}
	return res;

};
// @lc code=end

