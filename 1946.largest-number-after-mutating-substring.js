/*
 * @lc app=leetcode id=1946 lang=javascript
 *
 * [1946] Largest Number After Mutating Substring
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
/*
 the trick here is you cannot replace items in your ans from change array 2 times  
 i.e MUTAION MUST BE CONTINUOUS
*/
var maximumNumber = function (num, change) {
	let ans = ''
	let i = 0;

	for (i; i < num.length; i++) {
		if (parseInt(num[i]) >= change[num[i]]) {
			ans += num[i]
		}
		else break;
	}
	for (i; i < num.length; i++){
		if(parseInt(num[i]) <= change[num[i]]){
			ans+= change[num[i]].toString()
		}
		else{
			break;
		}
	}
	ans+=num.slice(i);
	return ans
};
// 974676
//console.log(maximumNumber('132', [9,8,5,0,3,6,4,2,6,8]))
// @lc code=end

