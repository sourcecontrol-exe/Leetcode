'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	let ans = main();
	console.log(ans)
	process.exit();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	let n = parseInt(readLine(), 10);
	while (n--) {
		let [n, d] = readLine().split(" ").map(ele => parseInt(ele))
		let arr = []
		while (n--) {
			arr.push(parseInt(readLine(), 10))
		}

		arr.sort((a, b) => a - b);
		function count(mid) {
			let ans = 1;
			let curr = arr[0];
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] - curr >= mid) {
					ans++;
					curr = arr[i]
				}
			}
			return ans;
		}
		let l = 0, r = arr[arr.length - 1];
		while (l < r) {
			let mid = l + Math.floor((r - l) / 2)
			let ans = count(mid);
			if (d <= ans) {
				l = mid + 1
			}
			else {
				r = mid
			}
		}
		return l-1
	}
}