/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {

    if (num == "") return 0;
    if (k == 0) return num;

    let stack = [];

    for (var i = 0; i < num.length; i++) {
        let element = num[i];
        while (k>0 && element < stack[stack.length - 1] && stack.length>0) {
            stack.pop();
            k--;
        }
        stack.push(element);
    }

    while(k--){
        stack.pop();
    }

    while(stack[0] == "0"){
        stack.shift();
    }
     return stack.length > 0 ? stack.join("") : '0'
};


// @lc code=end