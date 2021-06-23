const arr = [2, 4, 56, 76, 97];

function binearySearch(low, high, val) {
	let mid = low + Math.floor(low + (high - low) / 2);
	if (low < high) {

		if (arr[mid] == val) return mid;

		if (arr[mid] > val) binearySearch(low, mid - 1, val);

		if (arr[mid] < val) binearySearch(mid + 1, high, val);
	}
	return mid;
}
console.log(binearySearch(0, arr.length - 1, 56))