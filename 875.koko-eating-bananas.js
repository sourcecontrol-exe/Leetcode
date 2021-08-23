/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

	piles.sort((a,b) => a - b);

	let left = 0, right = piles[piles.length-1];

	while(left<=right){
		let mid = left + Math.floor((right-  left)/2);
		if(!checkRate(mid)) left = mid+1;
		else right = mid-1
	}
	return left

	function checkRate(mid){
		let time = 0; 
		for(let items of piles){
			time += Math.ceil(items/mid)
		}
		return time<=h;
	}
    
};
// console.log(minEatingSpeed([30,11,23,4,20],5))
// @lc code=end

