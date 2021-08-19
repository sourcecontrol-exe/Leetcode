/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
//  9,999
//1235 one thousand 2 hundred thiry five
var numberToWords = function (num) {
	let ones = {
		'1': "One", '2': "Two", '3': "Three", '4': "Four", '5': "Five", '6': "Six", '7': "Seven", '8': "Eight", '9': "Nine"
	}
	let tens = {
		'1': "Ten", '2': "Twenty", '3': "Thirty", '4': "Fourty", '5': "Fifty", '6': "Sixty", '7': "Seventy", '8': "Eighty", '9': "Ninty"
	}

	let arr = num.toString().split("").reverse()
	let result = []

	for(let i = 0; i< arr.length;i++){
		if(i == 0){
			result.push(ones[arr[i]])
			continue
		}
		else if(i == 1){
			result.push(tens[arr[i]])
			continue
		}
		else if(i ==2){
			result.push(ones[arr[i]] + " "+"Hundred");
			//result.push("Hundred")
			continue
		}
		else if(i ==3){
			result.push(ones[arr[i]] + " Thousand")
			continue
		}
		else{
			result.push(tens[arr[i]]);
			continue
		}
	}

	return result.reverse().join(" ")
};
console.log(numberToWords(1))
// @lc code=end

