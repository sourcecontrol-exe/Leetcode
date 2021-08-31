/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {

	let set = new Set(wordList);
	
	let q = [{word : beginWord, distance : 1}];

	while(q.length){
		let {word, distance} = q.shift();

		if(word == endWord) return distance;

		for(let i = 0; i< word.length; i++){
			for(let j = 0 ; j<26; j++){
				let char = String.fromCharCode("a".charCodeAt(0)+ j);
				let mod = word.slice(0,i)+ char + word.slice(i+1);
				if(set.delete(mod)){
					q.push({word: mod, distance :distance+1})
				}
			}
		}
	}
	return 0
}
// console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))
// @lc code=end

