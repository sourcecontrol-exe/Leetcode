/*
 * @lc app=leetcode id=1079 lang=javascript
 *
 * [1079] Letter Tile Possibilities
 */

// @lc code=start
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
	
	let res = new Set()

	function helper(tiles, index = 0, str = []) {
		if (!tiles.length) {
			return;
		}
		for (let i = 0; i < tiles.length; i++) {
			str.push(tiles[i])
			res.add(str.join(""));
			let rest = tiles.filter((ele, index)=> index!= i)
			helper(rest,i,str)
			str.pop();
			
		}
	}

	helper(tiles.split(""))
	return res.size
};
// @lc code=end