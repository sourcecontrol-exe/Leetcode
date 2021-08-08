/*
 * @lc app=leetcode id=1962 lang=javascript
 *
 * [1962] Remove Stones to Minimize the Total
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
	piles.sort((a,b)=> a-b);

	function binearySearch(item){
		let low = 0
		let high = piles.length
		while(low<high){
			let mid = low + Math.floor((high-low)/2);
			if(piles[mid]<=item){
				low = mid+1
			}
			else high = mid-1
		}
		return low;
	}
	
	while(k--){
		let pop = piles.pop()
		let num = Math.ceil(pop/2)
		let index = binearySearch(num);
		console.log(piles, index, num)
		piles.splice(index,0,num);
	}
	console.log(piles)
	let sum = 0;
	piles.map(ele => sum+= ele );
	return sum
};
console.log(minStoneSum([5,4,9], 2))
// @lc code=end

