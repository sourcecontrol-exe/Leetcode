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
		tasks.push(new node(startTime[i],endTime[i], profit[i]))
	}

	tasks.sort((a,b) => a.startTime - b.startTime);

	let dp = new Array(n+1).fill(0);

	function findMax(index){
		if(index>=tasks.length) return 0;
		
		let curr = index;

		while(curr<tasks.length && tasks[curr].startTime < tasks[index].endTime) curr++;

		let take = tasks[index].profit + findMax(curr)
		let exclude = findMax(index+1);
		return Math.max(take, exclude);
	}

	return findMax(0)
};
console.log(jobScheduling([1,2,3,3],[3,4,5,6],[50,10,40,70]))
// @lc code=end

