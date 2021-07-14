function queueConstruction(heights, infronts) {
	let map = {};
	for (let i = 0; i < heights.length; i++) {
		map[heights[i]] = infronts[i]
	}
	console.log(map)
	heights.sort((a, b) => a - b);
	for (let i = heights.length - 1; i >= 0; i--) {
		let element = heights.splice(i,1);
		heights.splice(i + map[element], 0, ...element);
	}
	return heights;
}
console.log(queueConstruction([5,3,2,6,1,4],[0,1,2,0,3,2]))