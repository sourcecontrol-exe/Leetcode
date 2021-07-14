/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
	people.sort((a,b)=> a[0]-b[0]);

	console.log(people);
	// for(let i = people.length-1 ;i>=0;i--){
	// 	let ele = people.splice(i,1);
	// 	people.splice(i+ele[1],0,[...ele]);
	// }
	//return people
    
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))
// @lc code=end

