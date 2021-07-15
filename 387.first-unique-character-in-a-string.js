/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let index ={}
    let value ={}
    for(let i =0;i< s.length ;i++){
	    if(!index[s[i]]) index[s[i]] = i
	    if(!value[s[i]]) value[s[i]] = 0;
	    value[s[i]]++
    }
    for(let item in value){
	    if(value[item] ==1) return index[item];
    }
    return -1;
};
console.log(firstUniqChar('leetcode'))
// @lc code=end

