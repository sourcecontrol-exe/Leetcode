/*
 * @lc app=leetcode id=1947 lang=javascript
 *
 * [1947] Maximum Compatibility Score Sum
 */

// @lc code=start
/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
	students.sort((a,b)=> parseInt(a.join("")) - parseInt(b.join("")))
	mentors.sort((a,b)=> parseInt(a.join("")) - parseInt(b.join("")))
	console.log(students,"ASD", mentors);

	let max = 0, indexTodelete;

	for (let studs of students) {
		let currMax = 0;

		for (let i = 0; i < mentors.length; i++) {
			
			let temp = 0;
			studs.map((ele, index) => {
				if (ele === mentors[i][index]) temp++
			})
			if (temp > currMax) {
				currMax = temp;
				indexTodelete = i;
			}
		}
		mentors.splice(indexTodelete, 1);
		max += currMax;
		console.log(max, mentors, currMax)
	}
	return max;
};
let students = [[0,1],[0,0],[0,1],[1,1]]
let mentors = [[1,1],[1,0],[0,1],[1,0]]
console.log(maxCompatibilitySum(students, mentors))
// @lc code=end

