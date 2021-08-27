/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(mat) {

	let max = 0 
	let arr = new Array(mat.length+1).fill(0).map(()=> new Array(mat[0].length+1).fill(0));

	for(let i= 1; i<=mat.length; i++){
		for(let j =1; j<=mat[0].length; j++){
			if(mat[i-1][j-1] == "1"){
				arr[i][j] = Math.min(arr[i-1][j], arr[i-1][j-1],arr[i][j-1])+1;
				max = Math.max(max, arr[i][j]);
			}
		}
	}
	return max**2;
};
// console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))
// @lc code=end

