/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
   let map = {};
   
   for(let item of words){
	   if(!map[item]) map[item] =0;
	   map[item]++;
   }
   console.log(map);
};
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],2));
// @lc code=end

