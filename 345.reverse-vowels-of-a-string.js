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

	let low = 0, high = arr.length-1
	while(low < high){
		if(set.has(arr[low]) && set.has(arr[high])){ 
			[arr[low], arr[high]] = [arr[high], arr[low]];
			low++;
			high--;
		}
		else if(set.has(arr[low])) high--;
		else low++
	}
	
	return arr.join("")
};
// console.log(reverseVowels("leetcode"))
// @lc code=end

