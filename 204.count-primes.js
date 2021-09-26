/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {

	let seen = new Uint8Array(n);
	let ans = 0;
	for (let i = 2; i < n; i++) {
		if (seen[i]) continue;
		ans++;
		for (let j = i * i; j < n; j += i) {
			seen[j] = 1;
		}
	}
	return ans;
}
// console.log(countPrimes(10))
// @lc code=end