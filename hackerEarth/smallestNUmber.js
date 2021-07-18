'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});

process.stdin.on('end', _ => {
	inputString = inputString.trim().split('\n');
	main();
});

function readLine() {
	return inputString[currentLine++];
}

function smallestNumber(n) {
	// if 'n' is a single digit number, then
	// it is the required number
	if (n >= 0 && n <= 9) {
		return n;
	}

	// stack the store the digits
	let digits = [];

	// repeatedly divide 'n' by the numbers
	// from 9 to 2 until all the numbers are
	// used or 'n' > 1
	for (let i = 9; i >= 2 && n > 1; i--) {
		while (n % i == 0) {
			// save the digit 'i' that divides 'n'
			// onto the stack
			digits.push(i);
			n = Math.floor(n / i);
		}
	}

	// if true, then no number 'k' can be formed
	if (n != 1) {
		return -1;
	}

	// pop digits from the stack 'digits'
	// and add them to 'k'
	let k = 0;
	while (digits.length != 0) {
		k = k * 10 + digits[digits.length - 1];
		digits.pop();
	}

	// required smallest number
	return k;
}
function main() {
	let test = parseInt(readLine(), 10);
	while (test--) {
		let digit = parseInt(readLine(), 10);
		
		let res = smallestNumber(digit);
		console.log(res)
	}
}