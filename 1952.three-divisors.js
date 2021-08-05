/*
 * @lc app=leetcode id=1952 lang=javascript
 *
 * [1952] Three Divisors
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n, temp =0) {

	var isPrime = (n) => {
		if (n <= 2) return false

		for (let i = 2; i < Math.sqrt(n)+1; i++) {
			if (n % i == 0) {
				temp++
				if(n / i < n && n/i !== i) temp++;
			}
		}
		if (temp !== 1) return false
		else return true;
	}

	return isPrime(n);
};
// console.log(isThree(6))
// @lc code=end

