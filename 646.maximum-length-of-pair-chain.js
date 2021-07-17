/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=> a[1]-b[1]);
    let prev= pairs[0];
    let chain =1;
    for( let item of pairs){
        let [prevkey, prevValue] = prev;
        let [currKey, currValue] = item;
        if(prevValue < currKey){
            prev = item;
            chain++;
        }
    }
    return chain;
};
// @lc code=end

