/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   
	let set = new Set()
	
	set.add('a')
	set.add('e')
	set.add("i")
	set.add('o')
	set.add('u')
	set.add('A')
	set.add('E')
	set.add("I")
	set.add('O')
	set.add('U')

	let arr = s.split("")
	let i = 0, j = arr.length-1
	console.log(arr)
	while(i<j){
		if(set.has(arr[i]) && set.has(arr[j])){
			console.log(arr[i], arr[j])
			[arr[i], arr[j]] = [arr[j], arr[i]]
			i++;
			j--;
			console.log("swap")
		}
		else if(set.has(arr[j])) i++;
		else  j--;
	}
	// console.log(pointer)
	return arr.join("")
};
console.log(reverseVowels("race car"))
// @lc code=end

