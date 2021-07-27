/*
 * @lc app=leetcode id=1235 lang=javascript
 *
 * [1235] Maximum Profit in Job Scheduling
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {

	class node{
        constructor(start, end, profit){
            this.start= start,
            this.end = end, 
            this.profit = profit
        }
    }
    
    let jobs = []

    for(let i =0;i< startTime.length;i++){
        jobs.push(new node(startTime[i], endTime[i], profit[i]))
    }
    
    jobs.sort((a,b)=> a.start!==b.start ?a.start-b.start : a.end-b.end)
    
    let dp = new Array(startTime.length +1).fill(0);
    
    
    function bs(i){
        let left = i+1;
        let right = jobs.length;
        while(left<right){
            let mid = Math.floor((left+right)/2)
            if(jobs[mid].start >= jobs[i].end){

               right = mid
            }
            else{
                left = mid+1
            }
        }
        return left;
    }
    
    for(let i = startTime.length-1;i>=0;i--){
        let index = bs(i)
	// console.log(index)
        dp[i] = Math.max(dp[i+1], dp[index]+jobs[i].profit)
        
    }
    return dp[0];
};
// console.log(jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70]))
// @lc code=end

