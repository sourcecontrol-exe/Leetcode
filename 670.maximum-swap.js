/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

	let arr = num.toString().split('').sort((a, b) => parseInt(b,10) - parseInt(a,10));
	let index ={};
	num = num.toString().split("");

	for(let i=0;i<num.length;i++){
		if(!index[num[i]]) index[num[i]]=i;
		index[num[i]] = i;
	}

	for (let i = 0; i < arr.length; i++) {
		if(arr[i] !== num[i]){
			let temp = num[index[arr[i]]];
			num[index[arr[i]]] = num[i];
			num[i] = temp;
			break;
		}
	}
	return parseInt(num.join(""),10)
};
// console.log(maximumSwap(2880))
// @lc code=end

/*
34589
9 8 5 4 3
 */