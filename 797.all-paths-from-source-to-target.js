/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (g) {
    let target = g.length-1 , res = []
    
    function callDFS(node=0, ans = []){
        if(node == target){
            res.push([...ans, node])
            return
        }
        for(let i =0; i<g[node].length; i++){
            callDFS(g[node][i], [...ans,node])
        }
    }
    callDFS();
    return res;
};
// @lc code=end

