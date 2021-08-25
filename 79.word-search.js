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

	function dfs(i, j, k) {

		if (k == word.length) return true;
		
		if (i < 0 || j < 0 || i == board.length || j == board[i].length || board[i][j] !== word[k]) return false;
		
		board[i][j] = '#'
		let a = (dfs(i + 1, j, k+1) || dfs(i, j + 1, k+1) || dfs(i - 1, j, k+1) || dfs(i, j - 1, k+1))
		board[i][j] = word[k]
		return a;
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (dfs(i, j, 0)) return true
		}
	}
	return false;
};
// let b =[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// let w = "ABCB"
// console.log(exist(b, w))
// @lc code=end

