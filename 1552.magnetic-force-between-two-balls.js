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
var maxDistance = function (position, m) {
	
	position.sort((a,b)=> a-b);

	function count(d){
		let ans = 1;
		let curr = position[0];
		for(let i = 1; i< position.length ;i++){
			if(position[i] - curr >=d){
				ans++;
				curr = position[i]
			}
		}
		return ans
	}

	let l = 0, r = position[position.length-1];

	while(l<r){
		let mid = l + Math.floor((r-l)/2);
		const balls = count(mid);
		if(m<=balls) l = mid+1;
		else r = mid;
	}
	return l-1; 

};
// @lc code=end

