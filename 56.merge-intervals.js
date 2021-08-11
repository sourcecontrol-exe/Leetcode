/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let ans = []

	intervals.sort((a, b) => a[0] - b[0])

	for (let i = 0; i < intervals.length; i++) {
	
		let [key , value] = intervals[i];

		let maxIndex = i;
		for(let j = i;j<intervals.length;j++){
			let [k,v] = intervals[j];
			if(k<=value){
				if(v >=value){
					value = v;
				}
				maxIndex = j;
			}
		}
		ans.push([key,value]);
		i = maxIndex;
	}
	return ans
};
// console.log(merge( [[1,4],[4,5]]))
// @lc code=end

