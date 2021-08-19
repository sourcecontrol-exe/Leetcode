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
		'1': "One", "2": "Two", "30": "Three", '4': "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine", "10": "Ten"
	}
	let tens = {
		'10': "Ten", "20": "Twenty", "30": "Thirty", '40': "Fourty", "50": "Fifty", "60": "Sixty", "70": "Seventy", "80": "Eighty", "90": "Ninty"
	}

	let arr = num.toString().split("")
	let result = []

	for(let i = 0; i< arr.length;i++){
		if(i == 0){
			result.push(ones[arr[i]])
		}
		else if(i == 1){
			result.push(tens[arr[i]])
		}
		else if(i ==2){
			result.push(Hundred)
			result.push(ones[arr[i]]);
		}
		else if(i ==3){
			result.push("Thousand")
			result.push(ones[arr[i]])
		}
		else{
			result.push(tens[arr[i]]);
		}
	}

	return result.join("");
};
console.log(numberToWords(123))
// @lc code=end

