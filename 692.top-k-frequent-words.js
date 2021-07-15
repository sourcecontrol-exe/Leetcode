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
   let map = new Map();
   
   for(let item of words){
	   if(!map.has(item)) map.set(item,0);
	   let frq = map.get(item)
	   map.set(item,frq+1);
   }
   
   let arr = Array.from(map);
   arr.sort((a,b)=>{
	   if(a[1]==b[1]){
		return a[0].localeCompare(b[0])
	   }
	   else{
		return b[1]- a[1]
	   }
   })
   let res = []
   for(let i =0 ;i<k ;i++){
	res.push(arr[i][0])
   }
   return res
};
// @lc code=end

