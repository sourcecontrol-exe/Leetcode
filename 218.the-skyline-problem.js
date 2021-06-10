/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
//left  => 2
// right => 7
// hight => 10

var getSkyline = function (buildings) {
    
    if(buildings.length==0) return [];

    let PriorityQueue = [];

    for(let building of buildings){
        let [start,end,height] =  building;
        PriorityQueue.push([start, 0-height]);
        PriorityQueue.push([start, height]);
    }
    PriorityQueue.sort((a,b)=> a[0]==b[0]?a[1]-b[1]: a[0]-b[0]);
    let result =[];
    console.log(PriorityQueue);
};
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]))
// @lc code=end

