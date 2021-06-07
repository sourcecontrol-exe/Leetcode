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
var allPathsSourceTarget = function (graph) {

    let result = [], target = graph.length-1;

    function callDFS(node =0 , arr= []){
        if(node == target){
            result.push([...arr,node])
            return;
        }
        for(var i =0;i<graph[node].length;i++){
            callDFS(graph[node][i], [...arr,node])
        }
    }

    callDFS();
    return result;
};
// @lc code=end

