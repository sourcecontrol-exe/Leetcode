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

	class node {
		constructor(start, end, profit) {
			this.start = start,
				this.end = end,
				this.profit = profit
		}
	}

	let n = startTime.length

	let tasks = []

	for (let i = 0; i < n; i++) {
		tasks.push(new node(startTime[i], endTime[i], profit[i]))
	}

	tasks.sort((a, b) => a.startTime == b.startTime ? a.endTime - b.endTime : a.startTime - b.startTime);

	let dp = new Array(n + 1).fill(0);

	let profitTracker = new Array(n+1).fill(0)

	function bs(index){
		let low = 0;
		let high = tasks.length;
		while(low< high){
			let mid = Math.floor((low+high)/2);
			if(tasks[mid].startTime >=tasks[index].endTime){
				low = mid;
			}
			else{
				high = mid-1;
			}
		}
		return low
	}
	for(let i = tasks.length-1; i<=0 ; i--){
		let index = bs(i);
		console.log(index);
	}
};
console.log(jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70]))
// @lc code=end

