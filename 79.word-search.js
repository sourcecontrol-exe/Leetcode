/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

	function tracking(curr = 0, i = 0, j = 0) {
		if(curr>=word.length) return true;

		if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || word[curr] !== board[i][j]) return false;

		if(board[i][j] == word[curr])return tracking(curr+1, i,j)

		

		console.log(tracking(curr,i-1,j) , tracking(curr,i+1,j) , tracking(curr,i,j-1) , tracking(curr,i,j+1))
		
		return (tracking(curr,i-1,j) || tracking(curr,i+1,j) || tracking(curr,i,j-1) || tracking(curr,i,j+1))
	}


	console.log(tracking())
};
let b = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let w = "ABCCED"
console.log(exist(b,w))
// @lc code=end

