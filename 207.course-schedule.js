/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

	let courses = new Array(numCourses).fill(0);

	let queueOfZeroIndegree= []

	for(let [course, prerequired] of prerequisites){
		courses[course]+=1
	}

	for(let i =0;i<courses.length;i++){
		if(courses[i] == 0) queueOfZeroIndegree.push(i);
	}

	let count = 0;

	while(queueOfZeroIndegree.length){
		let c = queueOfZeroIndegree.pop();
		count++;

		for(let [course, prereq] of prerequisites){
			if(prereq == c){
				courses[course]-=1;
				if(courses[course] ==0 ) queueOfZeroIndegree.push(course)
			}
		}
	}

	return count==numCourses;
	/* idea here is to make a queue of courses that have zero dependency or indegree
	for each element of  queue start removifn tha indegrees to courses and increae counter by one
	
	 */
};
// @lc code=end

