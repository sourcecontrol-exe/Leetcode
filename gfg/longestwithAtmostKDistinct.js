
function longestsub(s, k) {

	let max = []
	let slice = '';
	for (let i = 0; i < s.length; i++) {
		let temp = k + i;
		while (temp <= s.length) {
			slice = s.slice(i, temp).split("")
			sub = new Set(slice)
			if (sub.size <= k) {
				max.push([...slice])
			}
			else {
				break;
			}
			temp++;
		}
	}
	return [max, new Set(slice)] 
}
console.log(longestsub("wcysyycqpev", 6))
// wcysyycqpev
// 6