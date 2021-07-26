/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
   
	let Courses = new Array(numCourses).fill(0);

	for(let [key , val] of prerequisites){
		Courses[key]+=1;
	}
	let zeroQueue = []
	for(let i = 0 ;i< Courses.length; i++){
		if(Courses[i]==0) zeroQueue.push(i);
	}
	let count = 0;

	let ans = []
	while(zeroQueue.length){
		let c = zeroQueue.pop()
		ans.push(c)
		count++;

		for(let [course,prer] of prerequisites){
			if(c == prer){
				Courses[course]-=1
				if(Courses[course] == 0){
					zeroQueue.push(course)
				}
			}
		}
	}
	if(count == numCourses) return ans;
	else return [];;
};
// @lc code=end

