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

	points.sort(([a,b],[c,d])=> (Math.pow(a,2)+Math.pow(b,2)) - (Math.pow(c,2)+Math.pow(d,2)))
	return points.slice(0,k);
};

var kClosest1 = function (points, k) {

	let arr = []
	let isAdded = false;
	for(let [x,y] of points){
		if(!arr.length){
			arr.push([x,y])
			continue;
		}
		for(let j =0;j< arr.length;j++){
			let items = arr[j];
			
			if(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)) <= Math.sqrt(Math.pow(items[0],2)+Math.pow(items[1],2))){
				arr.splice(j,0,[x,y]);
				isAdded = true
				break;
			}
		}
		if(!isAdded){
			arr.push([x,y]);
			
		}
		isAdded = false;
		if(arr.length>k) arr.pop();
	}
	return arr
};
//console.log(kClosest([[-5,4],[-3,2],[0,1],[-3,7],[-2,0],[-4,-6],[0,-5]], 6))
// @lc code=end

