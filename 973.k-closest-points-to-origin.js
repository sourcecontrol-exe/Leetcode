/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {

	let res = {}
	let arr = []
	for (let [x, y] of points) {
		arr.push([x, y]);

		if(arr.length > k){
			console.log(arr)
			[[5,5],[]].sort((a,b)=> {
				Math.pow((Math.pow(a[0],2)+Math.pow(a[1],2)),0.5) - Math.pow((Math.pow(b[0],2)+Math.pow(b[1],2)),0.5)
			})
			arr.pop()
		}
	}
	console.log(arr)
};
console.log(kClosest([[1, 3], [-2, 2]], 1))
// @lc code=end

