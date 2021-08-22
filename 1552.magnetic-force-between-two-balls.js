/*
 * @lc app=leetcode id=1552 lang=javascript
 *
 * [1552] Magnetic Force Between Two Balls
 */

// @lc code=start
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
/*
* sort the array
* binary search
*  
*/
var maxDistance = function (position, m) {
	
	position.sort((a, b)=> a - b)


	function count(mid){
		let ans = 0, prev = 0; 
		for(let item of position){
			if(item  - prev >= mid){
				ans++;
				prev = item;
			}
		}
		return ans
	}

	let left = 0, right = position[position.length-1];
	while(left < right){
		let mid = left + Math.floor((right - left)/ 2 );
		let balls = count(mid);
		if(balls>=m) left = mid + 1;
		else right = mid
	}
	return left
};
console.log(maxDistance([5,4,3,2,1,1000000000],2))
// @lc code=end

